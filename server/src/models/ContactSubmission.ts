import mongoose from 'mongoose';

export interface IContactSubmission extends mongoose.Document {
  name: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  message: string;
  createdAt: Date;
}

const ContactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  serviceInterest: { 
    type: String, 
    required: true, 
    enum: ['web-development', 'mobile-app', 'cloud-infrastructure', 'ai-ml', 'it-consulting'] 
  },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);
