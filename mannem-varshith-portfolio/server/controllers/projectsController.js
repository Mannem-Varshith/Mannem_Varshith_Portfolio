const Project = require('../models/Project');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get featured projects
const getFeaturedProjects = async (req, res) => {
  try {
    const featuredProjects = await Project.find({ featured: true }).sort({ createdAt: -1 });
    res.json(featuredProjects);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getProjects,
  getFeaturedProjects
}; 