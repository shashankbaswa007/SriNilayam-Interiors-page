import React from 'react';
import { Award, Clock, Users, Shield, Lightbulb, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Design',
      description: 'Recognized for excellence in interior design with multiple industry awards and certifications.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and ensure all projects are completed within the agreed timeline.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled designers and craftsmen bring years of experience to every project.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive warranties and quality assurance.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Creative design solutions that maximize space and functionality while staying on budget.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="block text-orange-500">SriNilayam Interiors?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 8 years of experience and 500+ successful projects, we've built a reputation 
              for delivering exceptional interior design services that transform spaces and exceed expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful interior design"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award className="text-orange-500" size={32} />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-6 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;