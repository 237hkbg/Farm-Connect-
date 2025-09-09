const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Utilitaires pour lire/écrire les fichiers JSON
const readData = (file) => JSON.parse(fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '[]');
const writeData = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// Fichiers de données
const USERS_FILE = './users.json';
const ORDERS_FILE = './orders.json';
const MESSAGES_FILE = './messages.json';
const EQUIPMENT_FILE = './equipment.json';
const ADVICE_FILE = './advice.json';
const PRICES_FILE = './prices.json';

// --- Utilisateurs ---
app.get('/api/users', (req, res) => {
  res.json(readData(USERS_FILE));
});
app.post('/api/users', (req, res) => {
  const users = readData(USERS_FILE);
  users.push(req.body);
  writeData(USERS_FILE, users);
  res.status(201).json({ message: 'Utilisateur ajouté' });
});

// --- Commandes (Marché) ---
app.get('/api/market', (req, res) => {
  res.json(readData(ORDERS_FILE));
});
app.post('/api/market', (req, res) => {
  const orders = readData(ORDERS_FILE);
  orders.push(req.body);
  writeData(ORDERS_FILE, orders);
  res.status(201).json({ message: 'Commande ajoutée' });
});

// --- Messages (Chat) ---
app.get('/api/messages', (req, res) => {
  res.json(readData(MESSAGES_FILE));
});
app.post('/api/messages', (req, res) => {
  const messages = readData(MESSAGES_FILE);
  messages.push(req.body);
  writeData(MESSAGES_FILE, messages);
  res.status(201).json({ message: 'Message envoyé' });
});

// --- Equipements ---
app.get('/api/equipment', (req, res) => {
  res.json(readData(EQUIPMENT_FILE));
});
app.post('/api/equipment', (req, res) => {
  const equipment = readData(EQUIPMENT_FILE);
  equipment.push(req.body);
  writeData(EQUIPMENT_FILE, equipment);
  res.status(201).json({ message: 'Equipement ajouté' });
});

// --- Conseils agricoles ---
app.get('/api/advice', (req, res) => {
  res.json(readData(ADVICE_FILE));
});
app.post('/api/advice', (req, res) => {
  const advice = readData(ADVICE_FILE);
  advice.push(req.body);
  writeData(ADVICE_FILE, advice);
  res.status(201).json({ message: 'Conseil ajouté' });
});

// --- Prix en temps réel ---
app.get('/api/prices', (req, res) => {
  res.json(readData(PRICES_FILE));
});
app.post('/api/prices', (req, res) => {
  const prices = readData(PRICES_FILE);
  prices.push(req.body);
  writeData(PRICES_FILE, prices);
  res.status(201).json({ message: 'Prix ajouté' });
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});