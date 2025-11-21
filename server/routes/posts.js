import express from 'express';
import {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    addCommentToPost,
} from '../controllers/postController.js';
import { validatePost } from '../middleware/validate.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getPosts).post(protect, validatePost, createPost);
router
    .route('/:id')
    .get(getPostById)
    .put(protect, validatePost, updatePost)
    .delete(protect, deletePost);

router.route('/:id/comments').post(protect, addCommentToPost);

export default router;
