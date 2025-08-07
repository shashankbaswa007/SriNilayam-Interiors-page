import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "SriNilayam Interiors transformed our home beyond our wildest dreams. Their attention to detail and understanding of our lifestyle made the entire process seamless. We couldn't be happier!"
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "The team's professionalism and creativity exceeded our expectations. They turned our office space into a modern, productive environment that our employees love coming to every day."
    },
    {
      id: 3,
      name: 'Anita Reddy',
      role: 'Interior Enthusiast',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "From the initial consultation to the final installation, everything was perfect. They listened to our needs and delivered a design that perfectly reflects our personality and style."
    },
    {
      id: 4,
      name: 'Dr. Suresh Patel',
      role: 'Medical Professional',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "The quality of work and materials used was outstanding. They completed the project on time and within budget. I highly recommend SriNilayam Interiors for anyone looking for premium interior design."
    },
    {
      id: 5,
      name: 'Maya Singh',
      role: 'Architect',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "Working with SriNilayam was a pleasure. Their innovative approach to space planning and their ability to blend functionality with aesthetics is truly remarkable."
    }
  ];

  const nextTestimonial = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with SriNilayam Interiors.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto text-center relative">
                  <Quote className="absolute top-4 left-4 text-orange-200" size={40} />
                  
                  <div className="mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-orange-100"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current"
                          size={20}
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-orange-500 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-50 transition-colors z-10"
          >
            <ChevronLeft className="text-gray-600" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-50 transition-colors z-10"
          >
            <ChevronRight className="text-gray-600" size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;