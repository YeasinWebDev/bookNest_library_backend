import app from '../dist/app';
import { connectDB } from '../dist/config/database';

let dbConnected = false;

export default async (req: any, res: any) => {
  // Connect to database once
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }

  // Pass request to Express app
  app(req, res);
};
