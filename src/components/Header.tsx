import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-orange-500">
                SriNilayam Interiors
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/booking" 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Book Consultation
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/booking"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;