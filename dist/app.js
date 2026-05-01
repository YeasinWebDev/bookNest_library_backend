import express from 'express';
import cors from 'cors';
import userRoutes from './modules/user/route.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map