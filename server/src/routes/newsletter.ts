import express, { Request, Response } from 'express';
import { validateNewsletter } from '../middleware/validation';
import NewsletterSubscriber from '../models/NewsletterSubscriber';

const router = express.Router();

router.post('/', validateNewsletter, async (req: Request, res: Response) => {
  const { email } = req.body;
  
  // Upsert subscriber
  await NewsletterSubscriber.findOneAndUpdate(
    { email },
    { email, subscribedAt: new Date() },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  res.status(200).json({ success: true, message: 'Subscribed to newsletter' });
});

export default router;
