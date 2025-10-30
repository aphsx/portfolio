# 🚀 Personal Portfolio

Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, multi-language support (EN/TH), and email contact integration.

![Portfolio Preview](public/preview.png)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, minimal design with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 🌍 **Multi-language** - English and Thai support
- 📱 **Responsive** - Mobile-first design, works on all devices
- ⚡ **Fast** - Built with Vite for optimal performance
- 📧 **Contact Form** - Email integration with auto-reply
- 🎭 **Animations** - Smooth transitions with Framer Motion
- 🔒 **Type Safe** - Written in TypeScript

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

### Backend
- Node.js + Express
- Nodemailer (Gmail SMTP)

## 📦 Installation

### Prerequisites
- Node.js 16+
- npm or yarn
- Gmail account (for contact form)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create `.env` file in root:
```env
# Frontend API URL
VITE_API_URL=http://localhost:3001

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
MOCK_EMAIL=false
```

> 💡 **Gmail App Password:** Go to [Google App Passwords](https://myaccount.google.com/apppasswords) to generate one

4. **Start development servers**

```bash
# Run both frontend and backend
npm run dev:all

# Or run separately:
npm run dev      # Frontend only (Vite)
npm run server   # Backend only (Express)
```

5. **Open your browser**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 🚀 Deployment

### Frontend (Vite)
```bash
npm run build
```
Deploy the `dist/` folder to:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

### Backend (Express)
Deploy `server.js` to:
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Heroku](https://heroku.com)

**Important:** Update `VITE_API_URL` to your production API URL

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── common/    # Navbar, Footer, ErrorBoundary
│   │   ├── home/      # Home page sections
│   │   ├── projects/  # Project components
│   │   └── ui/        # Reusable UI components
│   ├── contexts/      # React Context (Theme, Language)
│   ├── data/          # Static content & data
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Route pages
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
├── server.js          # Express email server
├── .env               # Environment variables (not committed)
├── .env.example       # Environment template
└── package.json       # Dependencies
```

## 🎨 Customization

### Update Content

Edit files in `src/data/`:

1. **Personal Info** - `data/personal/info.ts`
2. **Biography** - `data/personal/timeline.ts`
3. **Projects** - `data/projects.ts`
4. **Skills** - `data/skillsData.ts`
5. **Social Links** - `data/socialData.ts`
6. **Tools/Uses** - `data/usesData.ts`

### Change Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#14b8a6', // Change to your color
    }
  }
}
```

### Translations

Add/edit translations in `src/contexts/language/translations.ts`

## 📧 Email Configuration

The contact form sends 2 emails:
1. **To You** - Contact form submission details
2. **To Sender** - Auto-reply confirmation

### Gmail Setup

1. Enable 2-Step Verification
2. Generate App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use App Password (not your regular password) in `.env`

### Test Email (Without Sending)

Set in `.env`:
```env
MOCK_EMAIL=true
```
Emails will be logged to console instead of sent.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (frontend) |
| `npm run server` | Start Express server (backend) |
| `npm run dev:all` | Run both frontend & backend |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📚 Documentation

For detailed architecture and technical documentation, see:
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed technical documentation

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aphisit**
- Email: aphisityns170960@gmail.com
- GitHub: [@your-username](https://github.com/your-username)

## 🙏 Acknowledgments

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

⭐ If you like this project, please give it a star!

**Built with ❤️ by Aphisit**
