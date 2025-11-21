import { body } from 'express-validator';

export const validatePost = [
  body('title').not().isEmpty().withMessage('Title is required'),
  body('content').not().isEmpty().withMessage('Content is required'),
  body('category').not().isEmpty().withMessage('Category is required'),
];

export const validateCategory = [
  body('name').not().isEmpty().withMessage('Name is required'),
];
