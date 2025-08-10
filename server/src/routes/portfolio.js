import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads/portfolio'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Mock portfolio data - in a real app, this would come from a database
const portfolioProjects = [
  {
    id: 1,
    title: 'Modern Living Space',
    category: 'living',
    location: 'Bangalore',
    size: '1200 sq ft',
    year: '2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A contemporary living room design featuring clean lines, neutral colors, and smart space utilization.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Luxury Master Bedroom',
    category: 'bedroom',
    location: 'Chennai',
    size: '800 sq ft',
    year: '2024',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'An elegant master bedroom with custom-built wardrobes and premium fabrics.',
    images: [
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: false
  },
  {
    id: 3,
    title: 'Gourmet Kitchen Design',
    category: 'kitchen',
    location: 'Mumbai',
    size: '600 sq ft',
    year: '2023',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A modern modular kitchen with island counter and premium appliances.',
    images: [
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: true
  }
];

// GET /api/portfolio - Get all portfolio projects
router.get('/', (req, res) => {
  try {
    const { category, featured, limit } = req.query;
    
    let filteredProjects = [...portfolioProjects];
    
    // Filter by category
    if (category && category !== 'all') {
      filteredProjects = filteredProjects.filter(project => project.category === category);
    }
    
    // Filter by featured
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }
    
    // Limit results
    if (limit) {
      filteredProjects = filteredProjects.slice(0, parseInt(limit));
    }
    
    res.status(200).json({
      success: true,
      projects: filteredProjects,
      total: filteredProjects.length
    });
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio projects'
    });
  }
});

// GET /api/portfolio/:id - Get single portfolio project
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const project = portfolioProjects.find(p => p.id === parseInt(id));
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      project
    });
  } catch (error) {
    console.error('Portfolio project fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project'
    });
  }
});

// GET /api/portfolio/categories - Get all categories
router.get('/categories', (req, res) => {
  try {
    const categories = [
      { id: 'all', name: 'All Projects' },
      { id: 'living', name: 'Living Room' },
      { id: 'bedroom', name: 'Bedroom' },
      { id: 'kitchen', name: 'Kitchen' },
      { id: 'office', name: 'Office' },
      { id: 'commercial', name: 'Commercial' }
    ];
    
    res.status(200).json({
      success: true,
      categories
    });
  } catch (error) {
    console.error('Categories fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories'
    });
  }
});

export default router;