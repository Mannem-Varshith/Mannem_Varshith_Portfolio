# 🚀 Mannem Varshith Portfolio

A modern, responsive personal portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a beautiful design, smooth animations, and comprehensive content showcasing skills, projects, and achievements.

## ✨ Features

- **Modern Design:** Clean, minimalist design with glassmorphism effects and gradient accents
- **Responsive Layout:** Mobile-first design that works perfectly on all devices
- **Dark Mode:** Toggle between light and dark themes
- **Smooth Animations:** Framer Motion animations for engaging user experience
- **SEO Optimized:** Meta tags, OpenGraph, and proper semantic HTML
- **Fast Performance:** Built with Vite for optimal development and build performance

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Security:** Helmet, CORS, Rate Limiting
- **Performance:** Compression middleware

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Axios** for API calls

## 📁 Project Structure

```
mannem-varshith-portfolio/
├── server/                    # Backend API
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API endpoints
│   ├── controllers/          # Business logic
│   ├── config/               # Database & environment
│   ├── seed/                 # Database seeding
│   └── index.js              # Server entry point
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   └── styles/           # Global styles
│   └── public/               # Static assets
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd mannem-varshith-portfolio
```

### 2. Backend Setup
```bash
cd server

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Update .env with your MongoDB connection string
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mannem_portfolio

# Seed the database with your information
npm run seed

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd client

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Update .env with backend URL
VITE_API_URL=http://localhost:5000

# Start development server
npm run dev
```

### 4. Access Your Portfolio
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🗄️ Database Seeding

The project includes a comprehensive seed script that populates MongoDB with all your information:

- **Profile:** Name, tagline, location, about text
- **Skills:** Grouped by category (Programming, Web Tech, Databases, Tools)
- **Projects:** Featured projects with descriptions and tech stacks
- **Achievements:** Accomplishments and links

Run `npm run seed` in the server directory to instantly populate your database.

## 🌐 Deployment

### Backend (Render/Railway)
1. Push your code to GitHub
2. Connect your repository to Render or Railway
3. Set environment variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production
   - `FRONTEND_ORIGIN`: Your frontend domain

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variable:
   - `VITE_API_URL`: Your backend API URL
3. Deploy and connect your custom domain

### Custom Domain Setup
- **A Record:** `mannem_varshith_portfolio.me` → `76.76.21.21`
- **CNAME:** `www` → `cname.vercel-dns.com`

## 📱 Content Customization

### Update Profile Information
Edit the seed data in `server/seed/seedData.js` to customize:
- Personal information
- Skills and categories
- Project details
- Achievement descriptions

### Modify Design
- Colors: Update `client/tailwind.config.js`
- Fonts: Modify Google Fonts in `client/index.html`
- Components: Edit files in `client/src/components/`

## 🔧 Available Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seed` - Populate database with sample data

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📊 API Endpoints

- `GET /api/profile` - Get profile information
- `GET /api/skills` - Get all skills grouped by category
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/achievements` - Get all achievements
- `GET /health` - Health check

## 🎨 Design Features

- **Glassmorphism:** Modern glass-like effects with backdrop blur
- **Gradient Accents:** Beautiful color transitions throughout the design
- **Smooth Animations:** Framer Motion animations for enhanced UX
- **Responsive Grid:** CSS Grid and Flexbox for perfect layouts
- **Custom Components:** Reusable UI components with consistent styling

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🌙 Dark Mode

- Automatic system preference detection
- Manual toggle in navigation
- Persistent user preference storage
- Smooth transitions between themes

## 🚀 Performance Features

- **Code Splitting:** React Router for lazy loading
- **Optimized Images:** Proper image sizing and formats
- **Minimal Dependencies:** Only essential packages included
- **Efficient Animations:** Optimized Framer Motion usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Icons:** React Icons (Feather Icons)
- **Fonts:** Google Fonts (Inter + Space Grotesk)
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS

---

**Built with ❤️ by Mannem Varshith**

For questions or support, reach out at [mannem.varshith1205@gmail.com](mailto:mannem.varshith1205@gmail.com) 