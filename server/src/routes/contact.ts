import express, { Request, Response } from 'express';
import { validateContact } from '../middleware/validation';
import ContactSubmission from '../models/ContactSubmission';
import { sendContactNotification } from '../services/email';

const router = express.Router();

router.post('/', validateContact, async (req: Request, res: Response) => {
  const serviceInterest = req.body.serviceInterest || req.body.service || 'General Inquiry';
  const data = {
    ...req.body,
    serviceInterest
  };
  const submission = new ContactSubmission(data);
  await submission.save();
  await sendContactNotification(data);
  res.status(201).json({ success: true, message: 'Contact submission received' });
});

export default router;
