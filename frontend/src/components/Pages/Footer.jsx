import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {

  return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Data Visualizer</h4>
              <p className="mb-2">Lalapur</p>
              <p className="mb-2">Madhubani, Bihar, 847235</p>
              <p>Phone: (123) 456-7890</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul>
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:text-blue-400">{item}</a>
                </li>
              ))}
            </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul>
                {['Blog', 'Documentation', 'FAQ', 'Support'].map((item) => (
                  <li key={item} className="mb-2">
                    <a href="#" className="hover:text-blue-400">{item}</a>
                  </li>
                ))}
            </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
              <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 px-3 w-full text-gray-800 rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-r"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#60A5FA' }}
                  className="text-2xl"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <p>&copy; 2024 Data Visualizer. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;