import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-poppins">Abhishek Gupta</h3>
            <p className="text-gray-400 mb-4">
              Data Science Student passionate about transforming data into actionable insights. 
              Always learning, always growing.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>by Abhishek</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect & Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/A289shek2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/Abhishek Gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="\Abhishek kumar gupta resume.pdf"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <span className="text-gray-400">YouTube - Coming Soon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Abhishek Gupta. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Built with React & TypeScript</span>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;