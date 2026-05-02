import { Router } from 'express';

import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from './controller';

import { createBookValidation, updateBookValidation } from './validation';

import { authenticate } from '../../middlewares/auth';

import { validate } from '../../middlewares/validate'; 

const router = Router();

router.post('/', authenticate, validate(createBookValidation), createBook);

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.put('/:id', authenticate, validate(updateBookValidation), updateBook);

router.delete('/:id', authenticate, deleteBook);

export default router;