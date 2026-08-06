import mongoose from 'mongoose';

export interface ICourseInquiry extends mongoose.Document {
  name: string;
  email: string;
  courseInterest: string;
  experienceLevel: string;
  message?: string;
  createdAt: Date;
}

const CourseInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  courseInterest: { type: String, required: true },
  experienceLevel: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ICourseInquiry>('CourseInquiry', CourseInquirySchema);
