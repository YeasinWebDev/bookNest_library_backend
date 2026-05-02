import { Router } from 'express';
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from './controller';
import { createBookValidation, updateBookValidation } from './validation';
import { authenticate } from '../../middlewares/auth';
import { validate } from '../../middlewares/validate';
export const bookRoutes = Router();
bookRoutes.post('/', authenticate, validate(createBookValidation), createBook);
bookRoutes.get('/', getAllBooks);
bookRoutes.get('/:id', getBookById);
bookRoutes.put('/:id', authenticate, validate(updateBookValidation), updateBook);
bookRoutes.delete('/:id', authenticate, deleteBook);
//# sourceMappingURL=route.js.map