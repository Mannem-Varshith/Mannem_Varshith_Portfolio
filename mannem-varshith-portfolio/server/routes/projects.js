const express = require('express');
const router = express.Router();
const { getProjects, getFeaturedProjects } = require('../controllers/projectsController');

// GET /api/projects
router.get('/', getProjects);

// GET /api/projects/featured
router.get('/featured', getFeaturedProjects);

module.exports = router; 