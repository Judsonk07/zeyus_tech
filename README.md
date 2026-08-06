# Zeyus Technologies — Official Company Platform

> **Building Digital Success. Empowering Future Talent.**

Welcome to the official repository for **Zeyus Technologies**, a modern tech agency and education platform based in **Perundurai, Erode, Tamil Nadu, India**. We specialize in engineering high-performance software, driving growth through digital marketing, producing high-impact video content, and mentoring the next generation of tech leaders.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat&logo=three.js)

---

## 🌟 About Zeyus Technologies

Zeyus Technologies operates with a **dual identity**:
1. **Tech Agency**: Delivering custom web software, cloud infrastructure, video production, and ad campaigns for startups and enterprises.
2. **Tech Academy**: Training engineers in Full-Stack Web Development, Cloud Engineering, DevOps, and AI through hands-on mentorship.

### 📍 Contact & Company Details
- **Founder & CEO**: Judson K
- **Headquarters**: Perundurai, Erode, Tamil Nadu, India
- **Phone**: [+91 7708796429](tel:+917708796429)
- **Email**: [judsonkoilraj573@gmail.com](mailto:judsonkoilraj573@gmail.com)
- **Instagram**: [@zeyus_technologies](https://www.instagram.com/zeyus_technologies?igsh=ZHJxZThzeGNicWFx)

---

## 👥 Leadership & Team

| Name | Role | Primary Focus |
|---|---|---|
| **Judson K** | Founder & CEO | Strategic Direction, Cloud Architecture & Full-Stack Mentorship |
| **Sriram** | MERN Stack Developer | React, Node.js & Full-Stack Engineering |
| **Sanjay** | Python Developer | Python, Automation & Backend APIs |
| **Aravind** | Video Editor | Motion Graphics, Video Editing & Creative Assets |
| **Naren** | Digital Marketing & Ads | Meta & Google Ad Campaigns & Conversion Optimization |
| **Dhinagaran** | Content Writer & Marketing | SEO Content Strategy, Copywriting & Digital Growth |

---

## 🚀 Core Services Offered

```
                     ┌─────────────────────────────────────────┐
                     │          ZEYUS TECHNOLOGIES             │
                     └────────────────────┬────────────────────┘
                                          │
       ┌──────────────────┬───────────────┴───────────────┬──────────────────┐
       │                  │                               │                  │
 💻 Web Dev          ☁️ Cloud/DevOps               📢 Ads & Marketing    🎬 Video Editing
  • React & Node      • AWS & Azure                 • Meta & Google Ads   • Motion Graphics
  • E-Commerce & SaaS • Docker & Kubernetes         • SEO Optimization    • Reels & Promos
```

1. **Custom Web Development**: High-performance React, Next.js, MERN stack web applications, SaaS products, and enterprise platforms.
2. **Cloud & DevOps Architecture**: AWS/Azure cloud infrastructure, CI/CD pipeline automation, Docker containerization, and 99.9% uptime monitoring.
3. **Ads & Digital Marketing**: ROI-focused Google & Meta ad campaigns, search engine optimization (SEO), and conversion rate growth.
4. **Video Editing & Visual Content**: High-converting promo videos, social media reels, YouTube post-production, and 2D/3D motion graphics.
5. **AI, Cloud & DevOps Education**: Practical 1-on-1 mentorship, cohort bootcamps, and career certification programs.

---

## 💻 Tech Stack & Architecture

### Frontend (`/client`)
- **Core**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` design system)
- **Animations**: Framer Motion (page transitions, staggered cards, glass drawer)
- **3D Graphics**: React Three Fiber (`@react-three/fiber` + `@react-three/drei`) floating 3D Z logo
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router v7

### Backend (`/server`)
- **API Framework**: Express.js REST API + TypeScript
- **Database**: MongoDB Atlas with Mongoose 9 schemas
- **Email Service**: Nodemailer with Gmail SMTP & branded HTML templates
- **Security**: Helmet, CORS origin controls, Express Rate Limiting

---

## 🛠 Local Setup & Development

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Judsonk07/zeyus_tech.git
cd zeyus_tech

# Install root concurrently tool
npm install

# Install client and server packages
cd client && npm install
cd ../server && npm install
cd ..
```

### 2. Configure Environment Variables

**Backend (`server/.env`)**:
```env
PORT=5000
MONGODB_URI=
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development

# Gmail SMTP Email Config
SMTP_SERVICE=gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
NOTIFICATION_EMAIL=
```

**Frontend (`client/.env`)**:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Development Server
From the root directory:
```bash
npm run dev
```
- Client runs on: `http://localhost:5173`
- Backend API runs on: `http://localhost:5000`

---

## 🌐 Production Deployment

### Frontend (Vercel)
1. Import repository to Vercel and set Root Directory to `client`.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Environment Variable:
   - `VITE_API_URL`: Your live Render API endpoint.
5. Vercel automatically uses `client/vercel.json` for React Router single-page rewrites.

### Backend (Render)
1. Create a new Web Service on Render pointing to root directory `server`.
2. Build Command: `npm install && npm run build`.
3. Start Command: `npm start`.
4. Add all environment variables from `server/.env`.

---

## 📄 License

© 2026 **Zeyus Technologies**. All rights reserved.
Designed and engineered with passion in Perundurai, Erode, India.
