# Zeyus Technologies — Company Website

> **Building Digital Success. Empowering Future Talent.**

A production-ready company website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring 3D animations, glassmorphism design, and a fully responsive light-theme UI.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss)

---

## 🏗 Tech Stack

### Frontend (`/client`)
| Technology | Purpose |
|---|---|
| React 18+ (Vite) | UI framework & build tool |
| React Router v7 | Client-side routing |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Page transitions & micro-interactions |
| React Three Fiber + drei | 3D hero animation |
| GSAP + ScrollTrigger | Scroll-based animation |
| Lucide React | Icon library |
| React Hook Form + Zod | Form validation |
| Axios | HTTP client for API calls |

### Backend (`/server`)
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose 9 | Database & ODM |
| Nodemailer | Email notifications |
| express-validator | Input validation |
| Helmet + CORS + rate-limit | Security middleware |
| dotenv | Environment configuration |

---

## 📋 Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm** 9+ (comes with Node.js)
- **MongoDB Atlas** account ([free tier](https://www.mongodb.com/cloud/atlas)) — or a local MongoDB instance
- **SMTP credentials** (optional, for email notifications — e.g., Gmail App Password or SendGrid)

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone <your-repo-url> zeyus-technologies
cd zeyus-technologies

# Install all dependencies (root + client + server)
npm install           # root dependencies (concurrently)
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### 2. Configure Environment Variables

```bash
# Copy example env files
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Edit `server/.env` with your actual values:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/zeyus_technologies
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=admin@zeyustechnologies.com
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### 3. Run Development Servers

```bash
# From root — starts both client (port 5173) and server (port 5000)
npm run dev
```

Or run individually:
```bash
npm run dev:client    # React dev server on :5173
npm run dev:server    # Express API on :5000
```

### 4. Open in Browser

Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
zeyus-technologies/
├── client/                        # React SPA (Vite)
│   ├── public/                    # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/            # Navbar, Footer, Container
│   │   │   ├── ui/                # Button, GlassCard, ServiceCard, etc.
│   │   │   └── three/             # React Three Fiber 3D components
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── lib/                   # API client, constants, utilities
│   │   ├── pages/                 # Home, Services, About, Contact
│   │   ├── App.tsx                # Root component with routing
│   │   ├── main.tsx               # Entry point
│   │   └── index.css              # Tailwind + design system
│   ├── .env.example
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── server/                        # Express REST API
│   ├── src/
│   │   ├── config/                # Database connection
│   │   ├── models/                # Mongoose schemas
│   │   ├── routes/                # API endpoints
│   │   ├── middleware/            # Validation, error handling
│   │   ├── services/              # Email service
│   │   └── index.ts               # Server entry point
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
├── package.json                   # Root scripts (concurrently)
├── .gitignore
└── README.md
```

---

## 🌐 Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero with 3D animation, stats, services preview, process timeline, testimonials |
| **Services** | `/services` | Detailed breakdown of all 5 services with pricing models |
| **About** | `/about` | Company story, mission/vision, values, team |
| **Contact** | `/contact` | Contact form, business info, course inquiry, FAQ |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit contact form (saves to DB + sends email) |
| `POST` | `/api/course-inquiry` | Submit course inquiry form |
| `POST` | `/api/newsletter` | Subscribe to newsletter |
| `GET` | `/api/health` | Health check |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--color-sky` | `#38BDF8` | Light blue accent |
| `--color-blue` | `#2563EB` | Primary blue |
| `--color-navy` | `#0F172A` | Deep navy (text/headings) |
| `--color-purple` | `#7C3AED` | AI/Education accent |
| `--color-bg` | `#FFFFFF` | Base background |
| `--color-surface` | `#EFF6FF` | Card backgrounds |

**Typography**: Space Grotesk (headings) + Inter (body text)

**Visual language**: Glassmorphism cards, gradient blobs, soft blue glows, 16–24px border radius

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|---|---|---|
| xs | < 375px | Small phones (iPhone SE) |
| sm | 375–639px | Standard phones |
| md | 640–767px | Large phones / small tablets |
| lg | 768–1023px | Tablets (iPad portrait) |
| xl | 1024–1279px | Tablets landscape / small laptops |
| 2xl | 1280–1535px | Laptops / desktops |
| 3xl | 1536px+ | Large monitors, ultra-wide |

### Testing Checklist
- [ ] Test at: 320px, 375px, 414px, 768px, 1024px, 1440px, 1920px widths
- [ ] Test both portrait and landscape orientations on mobile/tablet
- [ ] Verify no horizontal scroll/overflow at any breakpoint
- [ ] Verify all forms, nav, and buttons are usable with touch only
- [ ] Verify 3D hero falls back gracefully on mobile (< 768px)
- [ ] Verify `prefers-reduced-motion` is respected

---

## 🔧 [PLACEHOLDER] Content to Replace

Before launch, replace the following placeholder content with your actual business details:

| Item | Location | Current Value |
|---|---|---|
| **Team bios & photos** | About page | Generic team member cards |
| **Testimonials** | Home page | Placeholder client quotes |
| **Email address** | Contact, Footer | `hello@zeyustechnologies.com` |
| **Phone number** | Contact, Footer | `+1 (555) 123-4567` |
| **Office address** | Contact, Footer | `San Francisco, CA` |
| **Social media URLs** | Footer | Generic social links |
| **Logo image** | Navbar, Footer | Text-based "ZEYUS TECH" |
| **Google Maps embed** | Contact page | Gray placeholder box |
| **Founding story** | About page | Generic narrative |

---

## 🚢 Deployment

### Recommended Hosting (Free Tiers Available)

| Component | Service | Notes |
|---|---|---|
| Frontend | [Vercel](https://vercel.com) or [Netlify](https://netlify.com) | Build command: `cd client && npm run build` |
| Backend | [Render](https://render.com) or [Railway](https://railway.app) | Start command: `cd server && npm start` |
| Database | [MongoDB Atlas](https://mongodb.com/atlas) | M0 free tier, up to 512MB |

### Production Build

```bash
# Build the client
cd client && npm run build

# Build the server
cd server && npm run build

# Start production server
cd server && npm start
```

---

## 📄 License

© 2024 Zeyus Technologies. All rights reserved.
