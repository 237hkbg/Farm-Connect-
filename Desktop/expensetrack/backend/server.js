import express from 'express';
import cors from 'cors';
import authRouter from './authRouter.js';
import transactionsRouter from './transactionsRouter.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/transactions', transactionsRouter);

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
