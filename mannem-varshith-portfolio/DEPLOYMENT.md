# 🚀 Deployment Guide

This guide will walk you through deploying your MERN portfolio to production.

## 📋 Prerequisites

- GitHub account
- MongoDB Atlas account
- Render/Railway account (for backend)
- Vercel account (for frontend)
- Custom domain (optional)

## 🔧 Backend Deployment (Render/Railway)

### Option 1: Render (Recommended)

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Service**
   - **Name:** `mannem-varshith-portfolio-api`
   - **Environment:** `Node`
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Root Directory:** Leave empty (root)

4. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=10000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mannem_portfolio
   FRONTEND_ORIGIN=https://mannem_varshith_portfolio.me
   CORS_ORIGIN=https://mannem_varshith_portfolio.me
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for build to complete
   - Note your service URL (e.g., `https://your-api.onrender.com`)

### Option 2: Railway

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy from GitHub**
   - Click "Deploy from GitHub repo"
   - Select your repository
   - Set root directory to `server`

3. **Environment Variables**
   - Add the same variables as above
   - Railway will auto-assign a PORT

## 🌐 Frontend Deployment (Vercel)

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `client`

3. **Configure Build Settings**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables**
   ```
   VITE_API_URL=https://your-api.onrender.com
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be available at `https://your-project.vercel.app`

## 🔗 Custom Domain Setup

### DNS Configuration

1. **A Record**
   ```
   Type: A
   Name: @ (or leave empty)
   Value: 76.76.21.21
   TTL: 3600
   ```

2. **CNAME Record**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

### Vercel Domain Configuration

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain: `mannem_varshith_portfolio.me`
4. Vercel will provide DNS records if needed

## 🗄️ MongoDB Atlas Setup

1. **Create Cluster**
   - Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
   - Create free cluster

2. **Database Access**
   - Create database user with read/write permissions
   - Note username and password

3. **Network Access**
   - Add IP address: `0.0.0.0/0` (allows all connections)
   - Or add specific IPs for security

4. **Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, and `<dbname>`

## 📱 Testing Deployment

### Backend Health Check
```bash
curl https://your-api.onrender.com/health
```

### Frontend Test
- Visit your deployed frontend
- Check if it loads correctly
- Test dark mode toggle
- Verify all sections display properly

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files
   - Use strong passwords for MongoDB
   - Rotate API keys regularly

2. **CORS Configuration**
   - Only allow your frontend domain
   - Consider adding additional security headers

3. **Rate Limiting**
   - Backend includes rate limiting
   - Monitor for abuse

## 📊 Monitoring & Maintenance

1. **Logs**
   - Monitor backend logs in Render/Railway
   - Check for errors or performance issues

2. **Performance**
   - Use Vercel Analytics (free tier available)
   - Monitor Core Web Vitals

3. **Updates**
   - Keep dependencies updated
   - Monitor security advisories

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in deployment platform
   - Verify all dependencies are in package.json

2. **API Connection Issues**
   - Verify environment variables
   - Check CORS configuration
   - Test API endpoints directly

3. **Domain Issues**
   - DNS propagation can take up to 48 hours
   - Verify DNS records are correct
   - Check domain provider settings

### Support Resources

- **Render:** [docs.render.com](https://docs.render.com)
- **Railway:** [docs.railway.app](https://docs.railway.app)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas:** [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)

## 🎉 Success!

Once deployed, your portfolio will be:
- **Backend:** `https://your-api.onrender.com`
- **Frontend:** `https://mannem_varshith_portfolio.me`
- **GitHub:** Your repository with full source code

Your portfolio is now live and ready to impress! 🚀 