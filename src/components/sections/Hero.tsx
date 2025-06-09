'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Heading level={1} className="text-black">
                Record Every
              </Heading>
              <div className="flex items-center space-x-4">
                <div className="text-green-500 text-2xl md:text-4xl lg:text-6xl">→</div>
                <Heading level={1} className="text-black">
                  Penny
                </Heading>
                <div className="text-green-600 text-2xl md:text-4xl lg:text-6xl">*</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                LENS INC. LTD REVOLUTIONIZES BOOKKEEPING FOR INDIVIDUALS AND SMES USING INNOVATIVE DIGITAL SOLUTIONS. WE HELP FARMERS AND BUSINESSES ACHIEVE FINANCIAL ACCURACY.
              </p>
              <Button 
                variant="outline" 
                className="text-black border-black hover:bg-black hover:text-white transition-all duration-300"
                onClick={scrollToProducts}
              >
                → Explore Products
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
