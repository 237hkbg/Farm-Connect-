import express from 'express';
import db from './db.js';
import { authenticateToken } from './authRouter.js';

const router = express.Router();

router.use(authenticateToken);

router.get('/', (req, res) => {
  db.all(`SELECT * FROM transactions WHERE user_id = ? ORDER BY date DESC`, [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { type, category, description, amount, date } = req.body;
  const id = Math.random().toString(36).substr(2, 9);
  const user_id = req.user.id;

  db.run(
    `INSERT INTO transactions (id, user_id, type, category, description, amount, date) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [id, user_id, type, category, description, amount, date],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id, user_id, type, category, description, amount, date });
    }
  );
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const user_id = req.user.id;

  db.run(`DELETE FROM transactions WHERE id = ? AND user_id = ?`, [id, user_id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id });
  });
});

export default router;
