import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://zeyus-tech.onrender.com/api',
  timeout: 30000, // 30 seconds — allows Render free tier to wake up
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  service?: string;
}

export interface CourseInquiryData {
  name: string;
  email: string;
  course: string;
}

export const submitContact = async (data: ContactFormData) => {
  const payload = {
    ...data,
    serviceInterest: data.service || 'General Inquiry'
  };
  const response = await apiClient.post('/contact', payload);
  return response.data;
};

export const submitCourseInquiry = async (data: CourseInquiryData) => {
  const response = await apiClient.post('/course-inquiry', data);
  return response.data;
};

export const subscribeNewsletter = async (email: string) => {
  const response = await apiClient.post('/newsletter', { email });
  return response.data;
};

export const api = {
  submitContact,
  submitCourseInquiry,
  subscribeNewsletter,
};

export default apiClient;
