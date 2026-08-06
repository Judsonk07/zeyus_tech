import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional(),
  body('service').optional(),
  body('serviceInterest').optional(),
  body('message').trim().notEmpty().withMessage('Message is required'),
  handleValidationErrors
];

export const validateCourseInquiry = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('courseInterest').trim().notEmpty().withMessage('Course interest is required'),
  body('experienceLevel').isIn(['beginner', 'intermediate', 'advanced']).withMessage('Invalid experience level'),
  body('message').optional().isString(),
  handleValidationErrors
];

export const validateNewsletter = [
  body('email').isEmail().withMessage('Valid email is required'),
  handleValidationErrors
];
