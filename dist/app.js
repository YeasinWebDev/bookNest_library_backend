"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_js_1 = __importDefault(require("./modules/user/route.js"));
const route_js_2 = __importDefault(require("./modules/book/route.js"));
const notFound_js_1 = require("./middlewares/notFound.js");
const errorHandler_js_1 = require("./middlewares/errorHandler.js");
const app = (0, express_1.default)();
const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        message: "Server is running",
    });
});
app.use('/api/users', route_js_1.default);
app.use('/api/books', route_js_2.default);
app.use(notFound_js_1.notFound);
app.use(errorHandler_js_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map