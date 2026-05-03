"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const auth_1 = require("../../middlewares/auth");
const validate_1 = require("../../middlewares/validate");
exports.bookRoutes = (0, express_1.Router)();
exports.bookRoutes.post('/', auth_1.authenticate, (0, validate_1.validate)(validation_1.createBookValidation), controller_1.createBook);
exports.bookRoutes.get('/', controller_1.getAllBooks);
exports.bookRoutes.get('/:id', controller_1.getBookById);
exports.bookRoutes.put('/:id', auth_1.authenticate, (0, validate_1.validate)(validation_1.updateBookValidation), controller_1.updateBook);
exports.bookRoutes.delete('/:id', auth_1.authenticate, controller_1.deleteBook);
//# sourceMappingURL=route.js.map