const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
    required: true
  }
});

const skillGroupSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  skills: [skillSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('SkillGroup', skillGroupSchema); 