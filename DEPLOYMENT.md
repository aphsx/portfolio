# Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. [Vercel CLI](https://vercel.com/docs/cli) installed (optional, for command-line deployment)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your repository
   - Vercel will auto-detect Vite configuration

3. **Configure Environment Variables**

   In the Vercel project settings, add these environment variables:

   | Variable | Value | Description |
   |----------|-------|-------------|
   | `EMAIL_HOST` | `smtp.gmail.com` | SMTP server host |
   | `EMAIL_PORT` | `587` | SMTP server port |
   | `EMAIL_USER` | `your-email@gmail.com` | Your Gmail address |
   | `EMAIL_PASS` | `your-app-password` | Gmail App Password (not regular password) |
   | `MOCK_EMAIL` | `false` | Set to `true` for testing without sending real emails |
   | `VITE_API_URL` | (leave empty) | Will use relative paths `/api/*` in production |

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

   Follow the prompts to link your project and deploy.

4. **Set Environment Variables**
   ```bash
   vercel env add EMAIL_HOST
   vercel env add EMAIL_PORT
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Gmail App Password Setup

Since this portfolio uses Gmail for sending emails, you need to create an App Password:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already enabled)
3. Go to **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Use this password as `EMAIL_PASS` in Vercel environment variables

## Environment Variables Reference

### Required for Email Functionality
- `EMAIL_HOST`: SMTP server (default: smtp.gmail.com)
- `EMAIL_PORT`: SMTP port (default: 587)
- `EMAIL_USER`: Your email address
- `EMAIL_PASS`: App password for email

### Optional
- `MOCK_EMAIL`: Set to `true` to test without sending real emails
- `VITE_API_URL`: API URL (leave empty for production, uses relative paths)

## Project Structure

```
portfolio/
├── api/                    # Vercel Serverless Functions
│   ├── contact.js         # Contact form API
│   └── health.js          # Health check API
├── src/                   # Frontend source code
├── dist/                  # Build output (auto-generated)
├── vercel.json           # Vercel configuration
├── .nvmrc                # Node.js version specification
└── package.json          # Dependencies and scripts
```

## Vercel Configuration

The `vercel.json` file configures:
- Build command: `npm run build`
- Output directory: `dist`
- API routes: `/api/*` → serverless functions
- SPA routing: All other routes → `index.html`

## Testing Locally

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

3. **Test with local dev server**
   ```bash
   npm run dev:all
   ```
   This runs both the Vite dev server and the Express server for local development.

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18 or higher)
- Run `npm install` to ensure all dependencies are installed
- Check build logs in Vercel dashboard

### Email Not Sending
- Verify Gmail App Password is correct
- Ensure 2-Step Verification is enabled on Google Account
- Check environment variables are set correctly in Vercel
- Set `MOCK_EMAIL=true` to test without sending real emails

### API Routes Not Working
- Ensure API routes are in the `/api` directory
- Check Vercel function logs in the dashboard
- Verify environment variables are set

### 404 on Page Refresh
- The `vercel.json` rewrites should handle this
- If issues persist, check the Vercel dashboard for routing configuration

## Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Continuous Deployment

Once connected to your Git repository, Vercel will automatically:
- Deploy on every push to the main branch
- Create preview deployments for pull requests
- Run builds and tests before deployment

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
