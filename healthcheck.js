import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// @desc    Health check endpoint
// @route   GET /api/health
// @access  Public
router.get('/', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now(),
    dbState: mongoose.STATES[mongoose.connection.readyState]
	};
	res.send(healthcheck);
});

export default router;