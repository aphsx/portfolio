# Portfolio Project - Architecture Documentation

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Component Architecture](#component-architecture)
- [Routing](#routing)
- [Styling](#styling)
- [Email System](#email-system)

---

## 🎯 Project Overview

Personal portfolio website built with React, TypeScript, and modern web technologies. Features include multi-language support, dark mode, project showcase, and contact form with email integration.

**Live URL:** TBD
**Repository:** [GitHub](https://github.com/your-repo)

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **TypeScript 5.0** - Type safety
- **Vite 4.4** - Build tool & dev server
- **React Router DOM 6.15** - Client-side routing
- **Framer Motion 10.16** - Animations
- **Tailwind CSS 3.3** - Utility-first CSS

### Backend (Email Service)
- **Node.js + Express 5.1** - API server
- **Nodemailer 7.0** - Email sending
- **Gmail SMTP** - Email provider

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TS linting rules
- **PostCSS + Autoprefixer** - CSS processing

---

## 📁 Project Structure

```
portfolio/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── common/          # Shared components (Navbar, Footer, ErrorBoundary)
│   │   ├── home/            # Home page sections
│   │   ├── projects/        # Project-related components
│   │   └── ui/              # Reusable UI components (Section)
│   ├── contexts/            # React Context providers
│   │   ├── language/        # i18n context
│   │   └── theme/           # Dark mode context
│   ├── data/                # Static data & content
│   │   ├── personal/        # Personal info & bio
│   │   ├── projects.ts      # Project data
│   │   ├── skillsData.ts    # Skills data
│   │   ├── socialData.ts    # Social links
│   │   └── usesData.ts      # Tools & software
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Route pages
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component
│   └── main.tsx             # App entry point
├── server.js                # Express email server
├── .env                     # Environment variables
└── package.json             # Dependencies
```

### 🗂️ Component Organization

#### **common/** - Shared Layout Components
- `ErrorBoundary.tsx` - Error handling wrapper
- `Navbar.tsx` - Navigation bar with theme/language toggle
- `Footer.tsx` - Footer with social links

#### **home/** - Home Page Sections
- `HeroSection.tsx` - Hero with typewriter effect
- `AboutWorkSection.tsx` - Work description
- `BioSection.tsx` - Biography timeline
- `SkillsSection.tsx` - Technical skills
- `SocialLinksSection.tsx` - Social media links
- `ContactSection.tsx` - Contact form
- `FeaturedProjectsSection.tsx` - Featured projects showcase

#### **projects/** - Project Components
- `ProjectList.tsx` - Grid layout for projects

#### **ui/** - Reusable UI
- `Section.tsx` - Animated section wrapper

---

## 🔄 State Management

### Global State (React Context)

#### 1. **Theme Context** (`contexts/theme/`)
```typescript
interface ThemeContextType {
  isDark: boolean      // Current theme state
  toggleTheme: () => void  // Toggle function
}
```
- **Purpose:** Manage dark/light mode across app
- **Storage:** `localStorage` for persistence
- **Usage:** Available to all components via `useTheme()` hook

#### 2. **Language Context** (`contexts/language/`)
```typescript
interface LanguageContextType {
  language: 'en' | 'th'     // Current language
  setLanguage: (lang) => void  // Change language
  t: (key: string) => string   // Translation function
}
```
- **Purpose:** Multi-language support (EN/TH)
- **Storage:** `localStorage` for persistence
- **Translations:** Defined in `translations.ts`
- **Usage:** Available via `useLanguage()` hook

### Local State (useState)

#### Contact Form (`ContactSection.tsx`)
```typescript
const [formData, setFormData] = useState({
  name: string,
  email: string,
  message: string
})
const [isLoading, setIsLoading] = useState(false)
const [status, setStatus] = useState('')
```
- **Purpose:** Form input & submission state
- **Lifecycle:** Reset after successful submission

#### Navbar (`Navbar.tsx`)
```typescript
const [isOpen, setIsOpen] = useState(false)  // Mobile menu
```
- **Purpose:** Mobile menu toggle

---

## 🌊 Data Flow

### 1. **Application Initialization**
```
main.tsx
  → App.tsx
    → ThemeProvider (wraps entire app)
      → LanguageProvider (wraps entire app)
        → Router
          → Navbar (uses theme & language contexts)
          → Pages (routes)
          → Footer
```

### 2. **Page Rendering Flow**
```
User visits "/"
  → Router matches route
    → Renders Home.tsx
      → Home imports sections from components/home/
        → Each section uses:
          - useLanguage() for translations
          - Data from data/ folder
          - Framer Motion for animations
```

### 3. **Contact Form Flow**
```
User fills form in ContactSection
  → Submit button clicked
    → setIsLoading(true)
      → POST fetch to API_URL/api/contact
        → server.js receives request
          → Nodemailer sends 2 emails:
            1. To owner (aphisityns170960@gmail.com)
            2. Auto-reply to sender
          → Response sent back
            → Update status & reset form
              → setIsLoading(false)
```

### 4. **Theme Toggle Flow**
```
User clicks theme toggle in Navbar
  → toggleTheme() called
    → Update state (isDark)
      → Save to localStorage
        → Re-render components with new theme
          → Tailwind dark: classes apply
```

### 5. **Language Switch Flow**
```
User clicks language toggle
  → setLanguage('th' or 'en') called
    → Update state (language)
      → Save to localStorage
        → All t() calls re-evaluate
          → UI text updates
```

---

## 🧩 Component Architecture

### Component Hierarchy

```
App
├── ErrorBoundary
    ├── ThemeProvider
        ├── LanguageProvider
            ├── Router
                ├── Navbar
                ├── Routes
                │   ├── Home
                │   │   ├── HeroSection
                │   │   ├── AboutWorkSection
                │   │   ├── BioSection
                │   │   ├── SkillsSection
                │   │   ├── SocialLinksSection
                │   │   ├── ContactSection
                │   │   └── FeaturedProjectsSection
                │   ├── Projects
                │   │   └── ProjectList (x3 sections)
                │   ├── ProjectDetail
                │   └── Uses
                └── Footer
```

### Key Design Patterns

#### 1. **Compound Component Pattern**
- `Section` component wraps all home sections
- Provides consistent styling & animations
- Example:
```tsx
<Section title="Skills" icon={<Icon />} delay={0.4}>
  <SkillsContent />
</Section>
```

#### 2. **Container/Presentational Pattern**
- Pages (`Home.tsx`) = Containers (data fetching, state)
- Sections (e.g., `SkillsSection.tsx`) = Presentational (UI only)

#### 3. **Context Provider Pattern**
- Global state wrapped at app root
- Consumed via custom hooks (`useTheme`, `useLanguage`)

#### 4. **Custom Hooks Pattern**
- `useLocalizedData()` - Get localized content
- `useTheme()` - Access theme state
- `useLanguage()` - Access i18n state

---

## 🛣️ Routing

### Route Configuration (`App.tsx`)

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Landing page with all sections |
| `/projects` | `Projects` | Project gallery (3 categories) |
| `/projects/:projectId` | `ProjectDetail` | Individual project page |
| `/uses` | `Uses` | Tools & software list |

### Navigation Structure

**Navbar Links:**
- Logo → `/` (Home)
- Projects → `/projects`
- Uses → `/uses`

**No Route for:**
- ~~`/posts`~~ (Removed - unused placeholder)

---

## 🎨 Styling

### Approach: **Utility-First with Tailwind CSS**

#### Theme System
```typescript
// Tailwind dark mode: class-based
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-gray-100">
```

#### Color Palette
- **Primary:** Teal (`teal-500`, `teal-600`)
- **Light Mode:** White backgrounds, gray text
- **Dark Mode:** `gray-900` backgrounds, `gray-100` text
- **Accents:** Teal for CTAs, borders

#### Responsive Design
- **Mobile-first:** Base styles for mobile
- **Breakpoints:** Tailwind defaults (sm, md, lg, xl)
- **Mobile Menu:** Hamburger menu for small screens

#### Animations
- **Library:** Framer Motion
- **Patterns:**
  - Fade in on mount (`initial`, `animate`)
  - Stagger children animations
  - Page transitions (future enhancement)

---

## 📧 Email System

### Architecture

```
Frontend (ContactSection)
    ↓ HTTP POST
Backend (server.js on :3001)
    ↓ SMTP
Gmail (via Nodemailer)
    ↓ Email Delivery
    ├→ Owner (aphisityns170960@gmail.com)
    └→ Sender (auto-reply)
```

### Configuration

**Environment Variables** (`.env`):
```bash
# Frontend
VITE_API_URL=http://localhost:3001

# Backend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=aphisityns170960@gmail.com
EMAIL_PASS=<app-password>
MOCK_EMAIL=false
```

### Email Templates

#### 1. **Owner Email** (to you)
```
Subject: Contact Form: Message from [Name]

New Contact Form Submission

Name: [name]
Email: [email]
Message: [message]
```

#### 2. **Auto-Reply Email** (to sender)
```
Subject: เราได้รับข้อความของคุณแล้ว

ขอบคุณที่ติดต่อเรา

สวัสดีครับคุณ [name],

เราได้รับข้อความของคุณเรียบร้อยแล้ว
และจะตอบกลับโดยเร็วที่สุด

ข้อความที่คุณส่งมา:
[message]

ขอบคุณครับ,
Aphisit
```

### Error Handling
- Try-catch around fetch
- Display error message to user
- Console logs in server for debugging
- MOCK_EMAIL mode for testing without sending

---

## 🔐 Security Considerations

### Environment Variables
- ✅ `.env` in `.gitignore`
- ✅ `.env.example` for reference
- ✅ Never commit secrets

### Email Security
- ✅ Gmail App Password (not real password)
- ✅ Server-side validation
- ✅ Rate limiting recommended (TODO)

### Input Validation
- ✅ HTML5 required fields
- ✅ Email type validation
- ❌ No XSS sanitization (TODO)

---

## 🚀 Deployment Guide

### Frontend (Vite)
```bash
npm run build
# Deploy dist/ folder to:
# - Vercel
# - Netlify
# - GitHub Pages
```

**Environment Variables (Production):**
- Set `VITE_API_URL=https://your-api.com`

### Backend (Express)
```bash
# Deploy server.js to:
# - Railway
# - Render
# - Heroku
# - VPS

# Set environment variables on hosting platform
```

---

## 📈 Future Enhancements

### Planned Features
- [ ] Blog system (replace removed Posts page)
- [ ] Project filtering/search
- [ ] Animation improvements
- [ ] PWA support
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Analytics integration
- [ ] Contact form rate limiting
- [ ] Email template customization

### Code Improvements
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)
- [ ] Storybook for components
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)

---

## 📚 Key Learnings

### Why This Architecture?

#### 1. **Component Organization**
- **Separation by Feature** (common, home, projects) makes code easy to find
- **Colocation** of related files improves developer experience

#### 2. **Context for Global State**
- Lightweight solution for theme & i18n
- No need for Redux/Zustand for simple global state
- Easy to add more contexts if needed

#### 3. **Data in Separate Folder**
- Easy to update content without touching components
- Could be replaced with CMS in future
- Type-safe with TypeScript

#### 4. **Custom Hooks**
- Reusable logic (e.g., `useLocalizedData`)
- Clean component code
- Easy to test

#### 5. **Utility-First CSS**
- Fast development with Tailwind
- No CSS file clutter
- Easy theme switching with dark: prefix

---

## 🤝 Contributing

### Code Style
- Follow ESLint rules
- Use TypeScript for type safety
- Keep components small & focused
- Write meaningful commit messages

### Naming Conventions
- Components: `PascalCase` (e.g., `HeroSection`)
- Files: Match component name (e.g., `HeroSection.tsx`)
- Folders: `camelCase` (e.g., `common/`)
- Functions: `camelCase` (e.g., `toggleTheme`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `API_URL`)

---

## 📞 Support

For questions or issues:
- GitHub Issues: [Link]
- Email: aphisityns170960@gmail.com

---

**Last Updated:** 2025-01-04
**Author:** Aphisit
**Version:** 1.0.0
