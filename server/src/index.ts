import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorHandler';

// Routes
import contactRoutes from './routes/contact';
import courseInquiryRoutes from './routes/courseInquiry';
import newsletterRoutes from './routes/newsletter';
import healthRoutes from './routes/health';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());

const corsOrigin = process.env.CORS_ORIGIN;
app.use(cors({
  origin: corsOrigin ? (corsOrigin.includes(',') ? corsOrigin.split(',').map(s => s.trim()) : corsOrigin) : '*',
  credentials: true
}));
app.use(express.json());

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use('/api/', apiLimiter);

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/course-inquiry', courseInquiryRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/health', healthRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect to DB and Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
