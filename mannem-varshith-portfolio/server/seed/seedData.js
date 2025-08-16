const mongoose = require('mongoose');
require('dotenv').config();

const Profile = require('../models/Profile');
const SkillGroup = require('../models/Skill');
const Project = require('../models/Project');
const Achievement = require('../models/Achievement');

// MongoDB connection string
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mannem-varshith-portfolio';

// Sample data
const profileData = {
  name: "Mannem Varshith",
  tagline: "Computer Science Student & Aspiring Software Developer",
  location: "Tirupati, Andhra Pradesh, India",
  about: "A highly motivated Computer Science student with a strong foundation in data structures, algorithms, and programming. Passionate about utilizing emerging technologies to develop innovative solutions for real-world challenges. Eager to contribute to impactful projects, continuously learn, and excel in dynamic, collaborative environments.",
  photo: "/photo.jpg",
  resume: "/resume.pdf"
};

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", icon: "💻" },
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "PHP", icon: "🐘" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" }
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Bootstrap", icon: "🎯" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "🗄️" },
      { name: "SQL", icon: "📊" },
      { name: "MongoDB", icon: "🍃" }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: "📝" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "IntelliJ IDEA", icon: "🚀" },
      { name: "Anaconda", icon: "🐍" },
      { name: "Eclipse", icon: "🌙" }
    ]
  }
];

const projectsData = [
  {
    title: "AgriConnect",
    description: "AI-powered crop recommendations, marketplace, real-time chat, weather/location APIs.",
    techStack: ["AI/ML", "React", "Node.js", "MongoDB", "APIs"],
    githubLink: "https://github.com/Mannem-Varshith/Agri-Connect",
    image: "/project-agriconnect.jpg",
    featured: true
  },
  {
    title: "Freelancing Platform",
    description: "Marketplace for freelancers and clients, secure authentication, responsive UI.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com/Mannem-Varshith/Free_lancing",
    image: "/project-freelancing.jpg",
    featured: true
  },
  {
    title: "Attendance Management System",
    description: "Faculty portal for managing attendance with real-time updates.",
    techStack: ["PHP", "MySQL", "AJAX", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/Mannem-Varshith/Attendanceapp",
    image: "/project-attendance.jpg",
    featured: true
  }
];

const achievementsData = [
  {
    title: "LeetCode Problem Solver",
    description: "Solved over 150+ problems on LeetCode",
    link: "https://leetcode.com/u/varshi1205/",
    icon: "🏆",
    featured: true
  },
  {
    title: "SAP Hackfest 2025 Finalist",
    description: "Finalist – SAP Hackfest 2025 (AgriConnect)",
    link: "",
    icon: "🚀",
    featured: true
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await Profile.deleteMany({});
    await SkillGroup.deleteMany({});
    await Project.deleteMany({});
    await Achievement.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    const profile = await Profile.create(profileData);
    const skills = await SkillGroup.insertMany(skillsData);
    const projects = await Project.insertMany(projectsData);
    const achievements = await Achievement.insertMany(achievementsData);

    console.log('Database seeded successfully!');
    console.log(`Profile: ${profile.name}`);
    console.log(`Skills: ${skills.length} categories`);
    console.log(`Projects: ${projects.length} projects`);
    console.log(`Achievements: ${achievements.length} achievements`);

    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 