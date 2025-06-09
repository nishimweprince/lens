'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../ui/Heading';

export const NyibutsaSection: React.FC = () => {
  const features = [
    'Personal finance and debt management',
    'Track lenders and borrowers',
    'Personal budgeting tools',
    'Rental payment tracker',
    'Daily foreign exchange tracker',
    'Tax payment for SMEs',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 flex flex-col items-center justify-center text-white">
                <div className="w-full h-32 bg-blue-400 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold">💰</div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Nyibutsa App</h3>
                  <p className="text-blue-100 text-sm">Personal finance tracker</p>
                </div>
                <div className="w-full mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-blue-400 rounded h-8 flex items-center justify-center text-xs">Budget</div>
                  <div className="bg-blue-300 rounded h-8 flex items-center justify-center text-xs">Debt</div>
                  <div className="bg-blue-200 rounded h-8 flex items-center justify-center text-xs">Track</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-200 rounded-full opacity-40"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className="text-sm text-blue-600 uppercase tracking-wider font-semibold">
                / NYIBUTSA APP /
              </div>
              <Heading level={2} className="text-black">
                Personal Finance & Debt Management
              </Heading>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nyibutsa is a comprehensive personal finance mobile application that helps individuals track their lenders and borrowers with all associated details. Perfect for daily financial assistance and money management.
              </p>
              
              <div className="space-y-4">
                <p className="text-black font-medium">Key Features:</p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
