'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Heading level={1} className="text-black">
                We design first
              </Heading>
              <div className="flex items-center space-x-4">
                <div className="text-gray-400 text-2xl md:text-4xl lg:text-6xl">→</div>
                <Heading level={1} className="text-black">
                  class SaaS
                </Heading>
                <div className="text-black text-2xl md:text-4xl lg:text-6xl">*</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-600 text-sm uppercase tracking-wider">
                UWWA IS A DESIGN STUDIO FOCUSING SOLELY ON SAAS PRODUCTS. WE HELP BUSINESS ACHIEVES GOALS THROUGH DESIGN.
              </p>
              <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white">
                → Explore works
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
