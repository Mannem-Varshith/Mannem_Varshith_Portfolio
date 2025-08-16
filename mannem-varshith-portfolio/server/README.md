# Mannem Varshith Portfolio - Backend Server

This is the backend API server for Mannem Varshith's portfolio website built with Node.js, Express.js, and MongoDB.

## Features

- RESTful API endpoints for profile, skills, projects, and achievements
- MongoDB Atlas integration with Mongoose ODM
- Security middleware (helmet, CORS, rate limiting)
- Data seeding script for instant setup

## API Endpoints

- `GET /api/profile` - Get profile information
- `GET /api/skills` - Get all skills grouped by category
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/achievements` - Get all achievements
- `GET /health` - Health check endpoint

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file from `env.example`:
   ```bash
   cp env.example .env
   ```

3. Update `.env` with your MongoDB Atlas connection string and other configurations.

4. Seed the database:
   ```bash
   npm run seed
   ```

5. Start the server:
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB Atlas connection string
- `FRONTEND_ORIGIN` - Frontend URL for CORS

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Security middleware (helmet, CORS, rate limiting)
- Compression for performance 