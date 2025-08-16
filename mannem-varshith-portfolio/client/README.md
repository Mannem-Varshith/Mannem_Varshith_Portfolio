# Mannem Varshith Portfolio - Frontend

This is the React frontend for Mannem Varshith's portfolio website built with Vite, Tailwind CSS, and Framer Motion.

## Features

- Modern, responsive design with dark mode support
- Smooth animations and transitions using Framer Motion
- Tailwind CSS for styling with custom design system
- React Router for navigation
- API integration with custom hooks
- SEO optimized with meta tags and OpenGraph
- Mobile-first responsive design

## Tech Stack

- **Frontend Framework:** React 18 with Vite
- **Styling:** Tailwind CSS with custom components
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather Icons)
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Build Tool:** Vite

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```bash
   VITE_API_URL=http://localhost:5000
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── assets/           # Images, icons, SVGs
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── styles/          # Global styles and Tailwind config
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## Components

- **Navbar:** Navigation with dark mode toggle
- **Hero:** Landing section with profile photo
- **ProjectCard:** Individual project display
- **SkillCard:** Skills grouped by category
- **AchievementCard:** Achievement display
- **ContactForm:** Contact form and information
- **Footer:** Site footer with social links

## Pages

- **Home:** Combined view of all sections
- **About:** Personal information and highlights
- **Skills:** Technical skills grouped by category
- **Projects:** Featured projects showcase
- **Achievements:** Accomplishments and milestones
- **Contact:** Contact form and information

## Customization

- Update profile information in the backend API
- Modify colors in `tailwind.config.js`
- Add new components in the `components/` directory
- Update routing in `App.jsx`

## Deployment

The frontend is configured for deployment on Vercel with the domain `mannem_varshith_portfolio.me`. 