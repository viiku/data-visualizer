import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaBeer } from 'react-icons/fa'

function Feature() {
    const features = [
        { 
          title: 'Easy to Use', 
          description: 'Our app is designed with simplicity in mind.',
          icon: FaBeer
        },
        { 
          title: 'Powerful', 
          description: 'Packed with features to boost your productivity.',
          icon: FaBolt
        },
        { 
          title: 'Secure', 
          description: 'Your data is safe with our top-notch security.',
          icon: FaShieldAlt
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                        <feature.icon className="text-4xl text-blue-500 mb-4" />
                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Feature;