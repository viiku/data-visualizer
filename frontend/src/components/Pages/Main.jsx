import React from "react";
import { motion } from 'framer-motion';

function Main() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-600 text-white py-20"
        >
            <div className="container mx-auto px-4 text-center">
            <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4"
            >
                Welcome to Data Visualizer
            </motion.h2>
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl mb-8"
            >
                The best solution for Visualizing Complex Data
            </motion.p>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300"
            >
                Get Started
            </motion.button>
            </div>
        </motion.section>
    );
}

export default Main;