import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top contact bar */}
        <div className={`${isScrolled ? 'hidden' : 'block'} bg-gray-900 text-white py-2`}>
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+91 7981841442</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>SriNilayam.Interiors@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Transform Your Space Today</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <span className={`text-xl font-bold ${isScrolled ? 'text-orange-500' : 'text-white'}`}>
                SriNilayam Interiors
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    location.pathname === item.href
                      ? 'text-orange-500'
                      : isScrolled
                      ? 'text-gray-900'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/book-consultation"
                className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500"
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'bg-orange-50 text-orange-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/book-consultation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block bg-orange-500 text-white py-3 px-4 rounded-lg text-lg font-medium text-center mt-6 hover:bg-orange-600 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;