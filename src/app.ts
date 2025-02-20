import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Welcome to Express + TypeScript Server',
    environment: process.env.NODE_ENV || 'development'
  });
});

export default app;