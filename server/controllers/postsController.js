import Post from '../models/Post.js';
import { validationResult } from 'express-validator';

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate('category', 'name');
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Public
const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category', 'name');
    if (post) {
      res.json(post);
    } else {
      res.status(404);
      throw new Error('Post not found');
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Create a post
// @route   POST /api/posts
// @access  Public
const createPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, content, category } = req.body;
    const post = new Post({
      title,
      content,
      category,
    });
    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (err) {
    next(err);
  }
};

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Public
const updatePost = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, content, category } = req.body;
        const post = await Post.findById(req.params.id);

        if (post) {
            post.title = title;
            post.content = content;
            post.category = category;

            const updatedPost = await post.save();
            res.json(updatedPost);
        } else {
            res.status(404);
            throw new Error('Post not found');
        }
    } catch (err) {
        next(err);
    }
};

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Public
const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      await post.deleteOne();
      res.json({ message: 'Post removed' });
    } else {
      res.status(404);
      throw new Error('Post not found');
    }
  } catch (err) {
    next(err);
  }
};

export { getPosts, getPostById, createPost, updatePost, deletePost };
