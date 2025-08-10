# SriNilayam Interiors - Server

Backend API server for the SriNilayam Interiors website built with Node.js and Express.

## Features

- **Contact Form API**: Handle contact form submissions with email notifications
- **Consultation Booking**: Manage consultation bookings with validation
- **Portfolio Management**: Serve portfolio data and images
- **Testimonials API**: Manage and serve client testimonials
- **Email Service**: Automated email notifications using Nodemailer
- **File Upload**: Handle image uploads for portfolio
- **Rate Limiting**: Protect against spam and abuse
- **Input Validation**: Comprehensive request validation
- **Security**: Helmet, CORS, and other security middleware

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Email**: Nodemailer
- **Validation**: Express Validator
- **File Upload**: Multer
- **Security**: Helmet, CORS, Rate Limiting
- **Environment**: dotenv

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gmail account for email service

### Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

5. Create uploads directory:
```bash
mkdir -p uploads/portfolio
```

6. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- Rate limited to 5 requests per 15 minutes per IP

### Consultation
- `POST /api/consultation` - Book consultation
- `GET /api/consultation/availability?date=YYYY-MM-DD` - Check availability
- Rate limited to 3 requests per 15 minutes per IP

### Portfolio
- `GET /api/portfolio` - Get all projects
- `GET /api/portfolio/:id` - Get single project
- `GET /api/portfolio/categories` - Get all categories

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get single testimonial
- `GET /api/testimonials/stats` - Get testimonial statistics

### Health Check
- `GET /api/health` - Server health status

## Email Configuration

The server uses Gmail SMTP for sending emails. You need to:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in the `EMAIL_PASS` environment variable

## File Uploads

Portfolio images are uploaded to the `uploads/portfolio` directory. Supported formats:
- JPEG
- JPG
- PNG
- WebP

Maximum file size: 5MB

## Security Features

- **Helmet**: Sets various HTTP headers for security
- **CORS**: Configurable cross-origin resource sharing
- **Rate Limiting**: Prevents abuse and spam
- **Input Validation**: Validates all incoming requests
- **File Type Validation**: Only allows image uploads

## Production Deployment

1. Set `NODE_ENV=production` in environment variables
2. Configure production email credentials
3. Set up proper domain for `CLIENT_URL`
4. Use a process manager like PM2
5. Set up reverse proxy with Nginx
6. Configure SSL certificates

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build` - No build step required (placeholder)

## Error Handling

The server includes comprehensive error handling:
- Validation errors return 400 status
- Not found errors return 404 status
- Server errors return 500 status
- All errors are logged to console

## Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Include input validation for new endpoints
4. Update documentation for new features
5. Test all endpoints before submitting

## License

This project is licensed under the MIT License.