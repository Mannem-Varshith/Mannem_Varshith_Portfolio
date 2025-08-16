const SkillGroup = require('../models/Skill');

// Get all skills grouped by category
const getSkills = async (req, res) => {
  try {
    const skills = await SkillGroup.find().sort({ category: 1 });
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getSkills
}; 