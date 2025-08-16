const express = require('express');
const router = express.Router();
const { getAchievements } = require('../controllers/achievementsController');

// GET /api/achievements
router.get('/', getAchievements);

module.exports = router; 