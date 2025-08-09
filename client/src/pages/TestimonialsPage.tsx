import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
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
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "The team's professionalism and creativity exceeded our expectations. They turned our office space into a modern, productive environment that our employees love coming to every day. The project was completed on time and within budget.",
      project: 'Corporate Office Design',
      beforeImage: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Anita Reddy',
      role: 'Interior Enthusiast',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "From the initial consultation to the final installation, everything was perfect. They listened to our needs and delivered a design that perfectly reflects our personality and style. The quality of materials and workmanship is outstanding.",
      project: 'Living Room Makeover',
      beforeImage: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Dr. Suresh Patel',
      role: 'Medical Professional',
      location: 'Hyderabad',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "The quality of work and materials used was outstanding. They completed the project on time and within budget. I highly recommend SriNilayam Interiors for anyone looking for premium interior design services.",
      project: 'Clinic Interior Design',
      beforeImage: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Maya Singh',
      role: 'Architect',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "Working with SriNilayam was a pleasure. Their innovative approach to space planning and their ability to blend functionality with aesthetics is truly remarkable. They delivered exactly what we envisioned.",
      project: 'Residential Space Planning',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      name: 'Vikram Gupta',
      role: 'Restaurant Owner',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: "They transformed our restaurant into a beautiful dining space that perfectly captures our brand identity. The ambiance they created has significantly improved our customer experience and business.",
      project: 'Restaurant Interior',
      beforeImage: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              Client <span className="text-orange-500">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about their experience with SriNilayam Interiors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                      <p className="text-orange-500 font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-yellow-400 fill-current"
                            size={16}
                          />
                        ))}
                      </div>
                    </div>
                    <Quote className="text-orange-200 mt-2" size={24} />
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-sm font-medium text-gray-600 mb-3">Project: {testimonial.project}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Before</p>
                        <img
                          src={testimonial.beforeImage}
                          alt="Before"
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-2">After</p>
                        <img
                          src={testimonial.afterImage}
                          alt="After"
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
              Join Our Happy Clients
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your space? Let's create something beautiful together. 
              Schedule your free consultation today.
            </p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;