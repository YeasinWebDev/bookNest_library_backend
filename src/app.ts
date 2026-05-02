import express, { Request, Response } from 'express';

import cors from 'cors';

import userRoutes from './modules/user/route';

import bookRoutes from './modules/book/route';

import { notFound } from './middlewares/notFound';

import { errorHandler } from './middlewares/errorHandler';

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Server is running",
  });
});
app.use('/api/users', userRoutes);

app.use('/api/books', bookRoutes);

app.use(notFound);

app.use(errorHandler); 

export default app;