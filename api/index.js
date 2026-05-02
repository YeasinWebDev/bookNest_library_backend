import app from '../src/app';
import { connectDB } from '../src/config/database';
let dbConnected = false;
export default async (req, res) => {
    // Connect to database once
    if (!dbConnected) {
        await connectDB();
        dbConnected = true;
    }
    // Pass request to Express app
    app(req, res);
};
//# sourceMappingURL=index.js.map