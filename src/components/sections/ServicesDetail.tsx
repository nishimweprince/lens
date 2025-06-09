'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ServicesDetail: React.FC = () => {
  const services = [
    'Design an MVP based on your SaaS idea',
    'Transform a service business into SaaS',
    'Design SaaS for your internal needs',
    'Quickly test the business idea with potential customers',
    'Craft stunning UI',
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                We craft intuitive and tailored SaaS experiences that people love. From your idea to a complete design.
              </p>
              
              <div className="space-y-4">
                <p className="text-black font-medium">Perfect if you need to:</p>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl p-8 min-h-[400px] flex items-center justify-center"
          >
            <div className="bg-black rounded-xl p-6 w-full max-w-sm">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-600 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div className="bg-gray-600 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-8 h-2 bg-white rounded"></div>
                </div>
                <div className="bg-gray-600 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="bg-gray-600 rounded-lg h-16 flex items-center justify-center">
                  <div className="w-8 h-4 bg-white rounded"></div>
                </div>
              </div>
              <div className="text-white text-xs text-center opacity-60">
                Analytics Dashboard
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
