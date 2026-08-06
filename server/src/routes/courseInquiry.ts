import express, { Request, Response } from 'express';
import { validateCourseInquiry } from '../middleware/validation';
import CourseInquiry from '../models/CourseInquiry';
import { sendCourseInquiryNotification } from '../services/email';

const router = express.Router();

router.post('/', validateCourseInquiry, async (req: Request, res: Response) => {
  try {
    const inquiry = new CourseInquiry(req.body);
    await inquiry.save();

    sendCourseInquiryNotification(req.body).catch((err) => {
      console.error('Background course email notification error:', err);
    });

    return res.status(201).json({ success: true, message: 'Course inquiry received' });
  } catch (error: any) {
    console.error('Error in course inquiry route:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
