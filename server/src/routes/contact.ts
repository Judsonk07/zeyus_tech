import express, { Request, Response } from 'express';
import { validateContact } from '../middleware/validation';
import ContactSubmission from '../models/ContactSubmission';
import { sendContactNotification } from '../services/email';

const router = express.Router();

router.post('/', validateContact, async (req: Request, res: Response) => {
  try {
    const serviceInterest = req.body.serviceInterest || req.body.service || 'General Inquiry';
    const data = {
      ...req.body,
      serviceInterest
    };

    // 1. Save submission to MongoDB Atlas immediately
    const submission = new ContactSubmission(data);
    await submission.save();

    // 2. Trigger email notification asynchronously in background (non-blocking)
    sendContactNotification(data).catch((err) => {
      console.error('Background email notification error:', err);
    });

    // 3. Return instant 201 Created success to frontend!
    return res.status(201).json({ success: true, message: 'Contact submission received' });
  } catch (error: any) {
    console.error('Error in contact route:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
