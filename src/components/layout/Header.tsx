import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-blue-600 dark:text-blue-500">
          <BarChart2 size={30} className="text-blue-600 dark:text-blue-500" />
          <span className="text-xl font-bold">SoftSell</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#how-it-works" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#why-choose-us" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            Why Choose Us
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors py-2"
              >
                How It Works
              </a>
              <a 
                href="#why-choose-us" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors py-2"
              >
                Why Choose Us
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors py-2"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary text-center"
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;