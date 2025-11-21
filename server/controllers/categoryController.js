import Category from '../models/Category.js';
import { validationResult } from 'express-validator';

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

// @desc    Create a category
// @route   POST /api/categories
// @access  Public
const createCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name } = req.body;
    const category = new Category({
      name,
    });
    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
  } catch (err) {
    next(err);
  }
};

export { getCategories, createCategory };
