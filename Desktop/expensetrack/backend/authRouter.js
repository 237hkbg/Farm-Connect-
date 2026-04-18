import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from './db.js';

const router = express.Router();
const JWT_SECRET = 'super-secret-key-for-local-dev';

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const hash = await bcrypt.hash(password, 10);
  const id = Math.random().toString(36).substr(2, 9);

  db.run(`INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)`, [id, email, hash], function(err) {
    if (err) return res.status(400).json({ error: 'Email already exists' });
    
    const token = jwt.sign({ id, email }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ user: { id, email }, session: { user: { id, email }, access_token: token } });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, row) => {
    if (err || !row) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, row.password_hash);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: row.id, email: row.email }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ user: { id: row.id, email: row.email }, session: { user: { id: row.id, email: row.email }, access_token: token } });
  });
});

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get('/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

export default router;
