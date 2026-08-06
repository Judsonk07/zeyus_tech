import mongoose from 'mongoose';

export interface INewsletterSubscriber extends mongoose.Document {
  email: string;
  subscribedAt: Date;
}

const NewsletterSubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});

export default mongoose.model<INewsletterSubscriber>('NewsletterSubscriber', NewsletterSubscriberSchema);
