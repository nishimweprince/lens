'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../ui/Heading';

export const ServicesDetail: React.FC = () => {
  const services = [
    'All-in-one bookkeeping for agribusinesses',
    'Personal finance and debt management',
    'Commercial warehouse and storage solutions',
    'Digital and offline data synchronization',
    'Tax consultancy and compliance support',
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm text-green-600 uppercase tracking-wider font-semibold mb-4">
            / OUR PRODUCTS /
          </div>
          <Heading level={2} className="text-black mb-6">
            Lens Products & Services
          </Heading>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide comprehensive digital solutions for financial management, from agribusiness bookkeeping to personal finance tracking and commercial storage solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                We craft intuitive and tailored financial solutions that farmers and businesses love. From idea to complete implementation with both online and offline capabilities.
              </p>
              
              <div className="space-y-4">
                <p className="text-black font-medium">Perfect if you need to:</p>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 min-h-[400px] flex items-center justify-center"
          >
            <div className="bg-green-600 rounded-xl p-6 w-full max-w-sm shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-400 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="bg-green-400 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-8 h-2 bg-white rounded"></div>
                </div>
                <div className="bg-green-400 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="bg-green-400 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-8 h-4 bg-white rounded"></div>
                </div>
              </div>
              <div className="text-white text-xs text-center opacity-80">
                Lens Financial Dashboard
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
