"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const database_js_1 = require("./config/database.js");
const env_js_1 = require("./config/env.js");
const node_dns_1 = __importDefault(require("node:dns"));
node_dns_1.default.setServers(['8.8.8.8', '8.8.4.4']);
const startServer = async () => {
    try {
        await (0, database_js_1.connectDB)();
        app_js_1.default.listen(env_js_1.config.PORT, () => {
            console.log(`Server running on port ${env_js_1.config.PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map