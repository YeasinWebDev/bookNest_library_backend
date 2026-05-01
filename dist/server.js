import app from './app.js';
import { connectDB } from './config/database.js';
import { config } from './config/env.js';
const startServer = async () => {
    try {
        await connectDB();
        app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map