# 🔧 Technical Stack Overview

## Frontend Technologies

### Core Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2 | UI Library - Component-based architecture |
| TypeScript | 5.0 | Type safety & developer experience |
| Vite | 4.4 | Build tool & dev server - Fast HMR |

### Routing & Navigation
| Technology | Version | Purpose |
|-----------|---------|---------|
| React Router DOM | 6.15 | Client-side routing & navigation |

### Styling
| Technology | Version | Purpose |
|-----------|---------|---------|
| Tailwind CSS | 3.3 | Utility-first CSS framework |
| PostCSS | 8.4 | CSS processing |
| Autoprefixer | 10.4 | Automatic vendor prefixes |

### Animations
| Technology | Version | Purpose |
|-----------|---------|---------|
| Framer Motion | 10.16 | Declarative animations & transitions |

### Icons
| Technology | Version | Purpose |
|-----------|---------|---------|
| React Icons | 4.12 | Icon library (Material Design, Heroicons, etc.) |
| Lucide React | 0.544 | Modern icon set |

---

## Backend Technologies

### Server
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | - | JavaScript runtime |
| Express | 5.1 | Web framework for API |

### Email Service
| Technology | Version | Purpose |
|-----------|---------|---------|
| Nodemailer | 7.0 | Email sending library |
| Gmail SMTP | - | Email provider |

### Middleware
| Technology | Version | Purpose |
|-----------|---------|---------|
| CORS | 2.8 | Cross-Origin Resource Sharing |
| dotenv | 17.2 | Environment variable management |

---

## Development Tools

### Linting & Formatting
| Technology | Version | Purpose |
|-----------|---------|---------|
| ESLint | 8.45 | JavaScript/TypeScript linting |
| TypeScript ESLint | 8.44 | TypeScript-specific linting rules |

### Type Definitions
| Technology | Version | Purpose |
|-----------|---------|---------|
| @types/react | 18.2 | React type definitions |
| @types/react-dom | 18.2 | React DOM type definitions |
| @types/nodemailer | 7.0 | Nodemailer type definitions |
| @types/express | 5.0 | Express type definitions |
| @types/cors | 2.8 | CORS type definitions |

---

## State Management Strategy

### Global State (React Context API)

#### Theme Context
```typescript
// Location: src/contexts/theme/
- Manages: Dark/Light mode
- Storage: localStorage
- Provider: <ThemeProvider>
- Hook: useTheme()
```

#### Language Context
```typescript
// Location: src/contexts/language/
- Manages: i18n (EN/TH)
- Storage: localStorage
- Provider: <LanguageProvider>
- Hook: useLanguage()
```

### Local State (React useState)
- Form inputs (ContactSection)
- UI toggles (Mobile menu, dropdowns)
- Loading states
- Error messages

### Why No Redux/Zustand?
✅ Simple global state needs (theme, language)
✅ React Context sufficient for this scale
✅ Reduces bundle size
✅ Less boilerplate code

---

## Architecture Patterns

### 1. **Component Patterns**

#### Compound Components
```typescript
<Section title="Skills" icon={<Icon />}>
  <Content />
</Section>
```

#### Container/Presentational
- Pages = Containers (data, logic)
- Sections = Presentational (UI only)

### 2. **Code Organization**

#### Feature-based Folders
```
components/
├── common/      # Shared across app
├── home/        # Home page specific
├── projects/    # Projects page specific
└── ui/          # Reusable UI primitives
```

#### Barrel Exports
```typescript
// components/common/index.ts
export { Navbar } from './Navbar'
export { Footer } from './Footer'
```

### 3. **Custom Hooks**

```typescript
// Location: src/hooks/
useLocalizedData() - Get localized content
useTheme()         - Access theme context
useLanguage()      - Access i18n context
```

---

## Data Management

### Static Data Approach
- All content in `src/data/` folder
- TypeScript interfaces for type safety
- Easy to migrate to CMS later

### Data Structure
```typescript
// src/data/projects.ts
export const projects: Project[] = [...]

// src/data/personal/info.ts
export const personalInfo: PersonalInfo = {...}

// src/data/skillsData.ts
export const skills: Skill[] = [...]
```

### Why Static?
✅ No backend database needed
✅ Fast - no API calls
✅ Type-safe with TypeScript
✅ Easy to update content
⚠️ Limited to developer updates (no CMS)

---

## API Architecture

### Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |

### Request/Response Flow

```
Client (React)
  ↓ POST /api/contact
Server (Express :3001)
  ↓ Validation
  ↓ Send emails via Nodemailer
  ↓ Response
Client
  ↓ Update UI
```

### Error Handling
- Try-catch blocks
- User-friendly error messages
- Console logging for debugging
- HTTP status codes (200, 400, 500)

---

## Security Measures

### Current Implementation
✅ Environment variables for secrets
✅ Gmail App Passwords (not real password)
✅ Input validation (HTML5 + server-side)
✅ CORS enabled
✅ HTTPS ready (in production)

### Recommendations
⚠️ Add rate limiting (prevent spam)
⚠️ Add CSRF protection
⚠️ Sanitize user input (XSS prevention)
⚠️ Implement email queue (Bull/Bee)

---

## Performance Optimizations

### Current
✅ Vite for fast builds
✅ Code splitting (React Router)
✅ Lazy loading (dynamic imports ready)
✅ Optimized images (manual)
✅ Tailwind purge (removes unused CSS)

### Future Improvements
- [ ] Image optimization (next/image equivalent)
- [ ] Service Worker (PWA)
- [ ] Virtual scrolling (large lists)
- [ ] Memoization (React.memo, useMemo)
- [ ] Bundle analysis

---

## Build & Deployment

### Build Process
```bash
npm run build
  ↓ Vite build
  ↓ TypeScript compilation
  ↓ Tailwind CSS purge
  ↓ Asset optimization
  ↓ Output: dist/ folder
```

### Environment Strategy
```bash
Development:
- VITE_API_URL=http://localhost:3001
- Fast reload, source maps

Production:
- VITE_API_URL=https://api.yoursite.com
- Minified, optimized
```

### Hosting Options

#### Frontend (Static)
- Vercel ⭐ (Recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

#### Backend (Node.js)
- Railway ⭐ (Recommended)
- Render
- Heroku
- DigitalOcean App Platform

---

## Testing Strategy

### Current Status
❌ No tests implemented

### Recommended Setup
```bash
# Unit Testing
- Vitest (Vite-native)
- React Testing Library
- Test components, hooks, utils

# E2E Testing
- Playwright or Cypress
- Test user flows

# Type Checking
- TypeScript (already enabled)
- Strict mode recommended
```

---

## Browser Support

### Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Polyfills
- Vite handles modern JS features
- No IE11 support needed

---

## Developer Experience

### Hot Module Replacement (HMR)
✅ Instant updates during development
✅ Preserves React state
✅ Fast feedback loop

### TypeScript Benefits
✅ IntelliSense & autocomplete
✅ Compile-time error detection
✅ Better refactoring support
✅ Self-documenting code

### ESLint Integration
✅ Consistent code style
✅ Catch common errors
✅ TypeScript-aware rules

---

## Scalability Considerations

### Current Architecture
- ✅ Good for personal portfolio
- ✅ Easy to understand & maintain
- ⚠️ Static data limits content updates

### To Scale Up
1. **Add CMS** (Sanity, Contentful, Strapi)
2. **API Layer** (GraphQL or REST API)
3. **Database** (PostgreSQL, MongoDB)
4. **State Management** (Redux if very complex)
5. **Micro-frontends** (if multi-team)

---

## Key Dependencies Explained

### Why These Choices?

#### React 18
- Industry standard
- Huge ecosystem
- Concurrent rendering
- Server Components ready

#### TypeScript
- Prevents bugs at compile time
- Better IDE support
- Easier to refactor

#### Tailwind CSS
- Faster development
- Smaller CSS bundles (with purge)
- Consistent design system
- No CSS file management

#### Framer Motion
- Declarative animations
- Performance optimized
- Works great with React
- Easy to learn

#### Vite
- Faster than Webpack/CRA
- Better DX (HMR speed)
- Modern by default (ES modules)
- Smaller config

---

## Migration Path

### From This Stack To...

#### Next.js (If you need SSR/SSG)
```bash
# Similar stack, adds:
- Server-side rendering
- API routes
- Image optimization
- Better SEO
```

#### Astro (If you need static site)
```bash
# Benefits:
- Faster load times
- Less JavaScript
- Keep React components
- Better for content sites
```

#### React Native (If you need mobile)
```bash
# Reuse:
- Component logic
- Business logic
- State management patterns
```

---

## Resources & Learning

### Official Docs
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

### Community
- [React Discord](https://discord.gg/react)
- [Tailwind Discord](https://discord.gg/tailwindcss)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

---

**Last Updated:** 2025-01-04
**Maintained By:** Aphisit
