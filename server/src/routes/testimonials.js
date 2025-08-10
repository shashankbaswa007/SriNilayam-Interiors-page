import express from 'express';

const router = express.Router();

// Mock testimonials data - in a real app, this would come from a database
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner',
    location: 'Bangalore',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "SriNilayam Interiors transformed our home beyond our wildest dreams. Their attention to detail and understanding of our lifestyle made the entire process seamless. We couldn't be happier with the results!",
    project: 'Complete Home Interior',
    date: '2024-01-15',
    verified: true
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The team's professionalism and creativity exceeded our expectations. They turned our office space into a modern, productive environment that our employees love coming to every day.",
    project: 'Corporate Office Design',
    date: '2023-12-10',
    verified: true
  },
  {
    id: 3,
    name: 'Anita Reddy',
    role: 'Interior Enthusiast',
    location: 'Chennai',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "From the initial consultation to the final installation, everything was perfect. They listened to our needs and delivered a design that perfectly reflects our personality and style.",
    project: 'Living Room Makeover',
    date: '2024-02-20',
    verified: true
  },
  {
    id: 4,
    name: 'Dr. Suresh Patel',
    role: 'Medical Professional',
    location: 'Hyderabad',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The quality of work and materials used was outstanding. They completed the project on time and within budget. I highly recommend SriNilayam Interiors for premium interior design services.",
    project: 'Clinic Interior Design',
    date: '2023-11-05',
    verified: true
  },
  {
    id: 5,
    name: 'Maya Singh',
    role: 'Architect',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "Working with SriNilayam was a pleasure. Their innovative approach to space planning and their ability to blend functionality with aesthetics is truly remarkable.",
    project: 'Residential Space Planning',
    date: '2024-01-30',
    verified: true
  }
];

// GET /api/testimonials - Get all testimonials
router.get('/', (req, res) => {
  try {
    const { limit, verified } = req.query;
    
    let filteredTestimonials = [...testimonials];
    
    // Filter by verified status
    if (verified === 'true') {
      filteredTestimonials = filteredTestimonials.filter(testimonial => testimonial.verified);
    }
    
    // Limit results
    if (limit) {
      filteredTestimonials = filteredTestimonials.slice(0, parseInt(limit));
    }
    
    // Sort by date (newest first)
    filteredTestimonials.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    res.status(200).json({
      success: true,
      testimonials: filteredTestimonials,
      total: filteredTestimonials.length
    });
  } catch (error) {
    console.error('Testimonials fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonials'
    });
  }
});

// GET /api/testimonials/:id - Get single testimonial
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = testimonials.find(t => t.id === parseInt(id));
    
    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }
    
    res.status(200).json({
      success: true,
      testimonial
    });
  } catch (error) {
    console.error('Testimonial fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonial'
    });
  }
});

// GET /api/testimonials/stats - Get testimonial statistics
router.get('/stats', (req, res) => {
  try {
    const stats = {
      total: testimonials.length,
      verified: testimonials.filter(t => t.verified).length,
      averageRating: testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length,
      ratingDistribution: {
        5: testimonials.filter(t => t.rating === 5).length,
        4: testimonials.filter(t => t.rating === 4).length,
        3: testimonials.filter(t => t.rating === 3).length,
        2: testimonials.filter(t => t.rating === 2).length,
        1: testimonials.filter(t => t.rating === 1).length,
      }
    };
    
    res.status(200).json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Testimonial stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch testimonial statistics'
    });
  }
});

export default router;