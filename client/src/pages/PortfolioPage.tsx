import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'living', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'office', name: 'Office' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Living Space',
      category: 'living',
      location: 'Bangalore',
      size: '1200 sq ft',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A contemporary living room design featuring clean lines, neutral colors, and smart space utilization. The design incorporates modern furniture with traditional Indian elements.',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 2,
      title: 'Luxury Master Bedroom',
      category: 'bedroom',
      location: 'Chennai',
      size: '800 sq ft',
      year: '2024',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An elegant master bedroom with custom-built wardrobes, premium fabrics, and a serene color palette that promotes rest and relaxation.',
      images: [
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 3,
      title: 'Gourmet Kitchen Design',
      category: 'kitchen',
      location: 'Mumbai',
      size: '600 sq ft',
      year: '2023',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A modern modular kitchen with island counter, premium appliances, and smart storage solutions designed for both functionality and style.',
      images: [
        'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 4,
      title: 'Executive Office Suite',
      category: 'office',
      location: 'Hyderabad',
      size: '2000 sq ft',
      year: '2023',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A professional workspace design that enhances productivity while maintaining an impressive corporate aesthetic.',
      images: [
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      location: 'Goa',
      size: '1500 sq ft',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A sophisticated hotel lobby design that creates a welcoming atmosphere while reflecting the local culture and brand identity.',
      images: [
        'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 6,
      title: 'Cozy Reading Corner',
      category: 'living',
      location: 'Pune',
      size: '300 sq ft',
      year: '2024',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comfortable reading nook with built-in shelving, custom seating, and perfect lighting for book lovers.',
      images: [
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 7,
      title: 'Kids Playroom',
      category: 'bedroom',
      location: 'Delhi',
      size: '400 sq ft',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A vibrant and safe playroom designed for children with smart storage, play areas, and educational elements.',
      images: [
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 8,
      title: 'Open Kitchen Concept',
      category: 'kitchen',
      location: 'Kochi',
      size: '700 sq ft',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An open-concept kitchen that seamlessly blends with the living area, perfect for entertaining and family gatherings.',
      images: [
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Explore our collection of stunning interior design projects that showcase 
              our expertise, creativity, and commitment to excellence.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500 shadow-md'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.size}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => setSelectedImage(project)}
                          className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
                        >
                          <Eye size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description.substring(0, 100)}...
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 text-gray-900 p-2 rounded-full hover:bg-opacity-100 transition-colors"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedImage.image.replace('w=800', 'w=1600')}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="flex items-center space-x-4 text-gray-200 text-sm mb-2">
                  <span>{selectedImage.location}</span>
                  <span>•</span>
                  <span>{selectedImage.size}</span>
                  <span>•</span>
                  <span>{selectedImage.year}</span>
                </div>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;