import express, { Request, Response } from 'express';
import { validateContact } from '../middleware/validation';
import ContactSubmission from '../models/ContactSubmission';
import { sendContactNotification } from '../services/email';

const router = express.Router();

router.post('/', validateContact, async (req: Request, res: Response) => {
  const submission = new ContactSubmission(req.body);
  await submission.save();
  await sendContactNotification(req.body);
  res.status(201).json({ success: true, message: 'Contact submission received' });
});

export default router;
