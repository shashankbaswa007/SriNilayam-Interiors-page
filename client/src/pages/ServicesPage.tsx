import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, ChefHat, Wrench, Sofa, Ruler, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Interiors',
      description: 'Complete home interior design from concept to completion. We create beautiful, functional living spaces that reflect your personal style and enhance your daily life.',
      icon: Home,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Living room design',
        'Bedroom interiors',
        'Dining room layouts',
        'Home office setup',
        'Color consultation',
        'Lighting design'
      ],
      price: 'Starting from ₹2,000/sq ft'
    },
    {
      id: 2,
      title: 'Commercial Interiors',
      description: 'Professional workspace design that enhances productivity and reflects your brand identity. From offices to retail spaces, we create environments that work.',
      icon: Building,
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Office space planning',
        'Retail store design',
        'Restaurant interiors',
        'Reception areas',
        'Meeting room setup',
        'Brand integration'
      ],
      price: 'Starting from ₹1,500/sq ft'
    },
    {
      id: 3,
      title: 'Modular Kitchens',
      description: 'Functional and stylish kitchen designs with smart storage solutions and premium finishes. We create kitchens that are both beautiful and practical.',
      icon: ChefHat,
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom cabinet design',
        'Appliance integration',
        'Storage optimization',
        'Counter top selection',
        'Lighting solutions',
        'Color coordination'
      ],
      price: 'Starting from ₹1,25,000'
    },
    {
      id: 4,
      title: 'Home Renovations',
      description: 'Complete home makeovers that breathe new life into your existing space. We handle everything from planning to execution.',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Space reconfiguration',
        'Structural modifications',
        'Electrical & plumbing',
        'Flooring upgrades',
        'Wall treatments',
        'Complete makeovers'
      ],
      price: 'Starting from ₹3,000/sq ft'
    },
    {
      id: 5,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces designed specifically for your space and lifestyle needs. Quality craftsmanship meets unique design.',
      icon: Sofa,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom wardrobes',
        'Built-in storage',
        'Dining sets',
        'Living room furniture',
        'Study tables',
        'Bed designs'
      ],
      price: 'Starting from ₹15,000/piece'
    },
    {
      id: 6,
      title: 'Space Planning',
      description: 'Optimize your space with expert planning and layout design for maximum functionality and aesthetic appeal.',
      icon: Ruler,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        '3D visualization',
        'Layout optimization',
        'Traffic flow analysis',
        'Furniture placement',
        'Storage planning',
        'Design consultation'
      ],
      price: 'Starting from ₹500/sq ft'
    },
    {
      id: 7,
      title: 'Furnishings',
      description: 'Complete furnishing solutions with curated accessories, textiles, and decorative elements that bring your space to life.',
      icon: Sparkles,
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Curtains & blinds',
        'Decorative accessories',
        'Artwork & wall decor',
        'Rugs & carpets',
        'Cushions & throws',
        'Lighting fixtures'
      ],
      price: 'Starting from ₹25,000/room'
    }
  ];

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
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From concept to completion, we offer comprehensive interior design services 
              tailored to your unique vision and lifestyle needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-orange-500 p-3 rounded-full">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-orange-500 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Starting Price</div>
                      <div className="text-xl font-bold text-orange-500">{service.price}</div>
                    </div>
                    <Link
                      to="/book-consultation"
                      className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your project is completed smoothly and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your needs and vision' },
              { step: '02', title: 'Design', description: 'Create detailed designs and 3D visualizations' },
              { step: '03', title: 'Planning', description: 'Finalize materials, timeline, and project details' },
              { step: '04', title: 'Execution', description: 'Professional installation and project completion' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Book your free consultation today.
            </p>
            <Link
              to="/book-consultation"
              className="inline-flex items-center space-x-2 bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;