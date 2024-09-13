import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
    
    return (
        <motion.header 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md"
        >
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">Data Visualizer</h1>
                <nav>
                    <ul className="flex space-x-4">
                    {['Register', 'Login', 'Features', 'Pricing', 'Contact', ].map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-blue-600 transition duration-300"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">{item}</a> */}
                        </motion.li>
                    ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}

export default Header;