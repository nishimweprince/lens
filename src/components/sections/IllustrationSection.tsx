'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const IllustrationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-green-200 via-emerald-200 to-green-300 rounded-3xl p-8 md:p-16 min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute top-8 left-8 w-16 h-16 bg-gray-300 rounded-full opacity-60"></div>
          <div className="absolute top-16 right-16 w-24 h-24 bg-gray-400 rounded-lg opacity-40"></div>
          <div className="absolute bottom-8 left-16 w-32 h-20 bg-gray-500 opacity-30"></div>
          <div className="absolute bottom-16 right-8 w-20 h-32 bg-gray-600 opacity-25"></div>
          
          <div className="relative z-10 text-center">
            <div className="bg-green-600 rounded-2xl p-6 mx-auto w-48 h-80 flex flex-col items-center justify-center shadow-2xl">
              <div className="bg-green-400 rounded-lg w-32 h-6 mb-8"></div>
              <div className="text-white text-2xl font-bold mb-4">RWF 2,450,000</div>
              <div className="flex space-x-4 mb-8">
                <div className="w-6 h-6 bg-green-400 rounded"></div>
                <div className="w-6 h-6 bg-green-400 rounded"></div>
                <div className="w-6 h-6 bg-green-400 rounded"></div>
              </div>
              <div className="bg-green-400 rounded w-24 h-4"></div>
            </div>
            
            <div className="absolute -top-16 -left-16 w-32 h-8 bg-green-600 rounded-full transform -rotate-45"></div>
            <div className="absolute -top-8 -left-8 w-8 h-8 bg-green-600 rounded-full"></div>
            <div className="absolute -top-12 left-4 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
