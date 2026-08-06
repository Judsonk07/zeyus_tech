import express, { Request, Response } from 'express';
import { validateCourseInquiry } from '../middleware/validation';
import CourseInquiry from '../models/CourseInquiry';
import { sendCourseInquiryNotification } from '../services/email';

const router = express.Router();

router.post('/', validateCourseInquiry, async (req: Request, res: Response) => {
  const inquiry = new CourseInquiry(req.body);
  await inquiry.save();
  await sendCourseInquiryNotification(req.body);
  res.status(201).json({ success: true, message: 'Course inquiry received' });
});

export default router;
