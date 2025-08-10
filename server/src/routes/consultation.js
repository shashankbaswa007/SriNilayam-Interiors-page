import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import { sendConsultationEmail } from '../services/emailService.js';

const router = express.Router();

// Rate limiting for consultation booking
const consultationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 consultation bookings per windowMs
  message: 'Too many consultation requests, please try again later.',
});

// Validation rules
const consultationValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  body('projectType')
    .isIn(['residential', 'commercial', 'kitchen', 'renovation', 'furniture', 'furnishings'])
    .withMessage('Invalid project type'),
  body('propertyType')
    .optional()
    .isIn(['apartment', 'villa', 'office', 'retail', 'restaurant'])
    .withMessage('Invalid property type'),
  body('rooms')
    .isArray()
    .withMessage('Rooms must be an array'),
  body('budget')
    .optional()
    .isIn(['under-5-lakh', '5-10-lakh', '10-20-lakh', '20-50-lakh', 'above-50-lakh'])
    .withMessage('Invalid budget range'),
  body('timeline')
    .optional()
    .isIn(['immediate', '1-3-months', '3-6-months', '6-12-months', 'planning'])
    .withMessage('Invalid timeline'),
  body('consultationType')
    .isIn(['virtual', 'site-visit'])
    .withMessage('Invalid consultation type'),
  body('preferredDate')
    .isISO8601()
    .withMessage('Please provide a valid date'),
  body('preferredTime')
    .matches(/^(9|10|11):00 AM$|^(2|3|4|5):00 PM$/)
    .withMessage('Invalid time slot'),
  body('address')
    .if(body('consultationType').equals('site-visit'))
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Address is required for site visits and must be between 10 and 500 characters'),
  body('additionalNotes')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Additional notes must not exceed 1000 characters'),
];

// POST /api/consultation - Book consultation
router.post('/', consultationLimiter, consultationValidation, async (req, res) => {
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

    const consultationData = req.body;

    // Send email
    const emailResult = await sendConsultationEmail(consultationData);

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Consultation booked successfully! We will contact you within 24 hours to confirm.',
        bookingId: `SNI-${Date.now()}`, // Generate a simple booking ID
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to book consultation. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Consultation booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
});

// GET /api/consultation/availability - Check available time slots
router.get('/availability', async (req, res) => {
  try {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'Date parameter is required',
      });
    }

    // Mock availability data - in a real app, this would check a database
    const availableSlots = [
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '2:00 PM',
      '3:00 PM',
      '4:00 PM',
      '5:00 PM',
    ];

    res.status(200).json({
      success: true,
      date,
      availableSlots,
    });
  } catch (error) {
    console.error('Availability check error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to check availability',
    });
  }
});

export default router;