import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 contact form submissions per windowMs
  message: 'Too many contact form submissions, please try again later.',
});

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  body('projectType')
    .optional()
    .isIn(['residential', 'commercial', 'kitchen', 'renovation', 'furniture', 'furnishings', 'consultation'])
    .withMessage('Invalid project type'),
  body('budget')
    .optional()
    .isIn(['under-5-lakh', '5-10-lakh', '10-20-lakh', '20-50-lakh', 'above-50-lakh'])
    .withMessage('Invalid budget range'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
];

// POST /api/contact - Submit contact form
router.post('/', contactLimiter, contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, phone, projectType, budget, message } = req.body;

    // Send email
    const emailResult = await sendContactEmail({
      name,
      email,
      phone,
      projectType,
      budget,
      message,
    });

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
});

export default router;