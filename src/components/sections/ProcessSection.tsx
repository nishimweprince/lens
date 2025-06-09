'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../ui/Heading';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-sm text-gray-500 uppercase tracking-wider">
              / HOW IT WORKS /
            </div>
            <Heading level={2} className="text-black">
              Crafting Growth Through SaaS with UWWA
            </Heading>
            <p className="text-gray-600 text-lg leading-relaxed">
              Elevate your SaaS journey with UWWA: Craft, Enhance, Extend. Tailored SaaS design solutions, from idea to execution, for businesses seeking intuitive experiences and growth. Choose UWWA to transform your SaaS vision into reality.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Heading level={3} className="text-black">
                Design a new SaaS
              </Heading>
              <div className="flex items-center space-x-4">
                <div className="bg-black rounded-full px-6 py-2 text-white text-sm font-medium">
                  *
                </div>
                <div className="text-gray-400 text-sm">
                  STEP /01/ /02/ /03/
                </div>
                <div className="ml-auto text-gray-600 text-sm font-medium">
                  PROGRESS 33%
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="bg-black rounded-lg w-48 h-32 mx-auto flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 w-32 h-20">
                    <div className="bg-gray-600 rounded"></div>
                    <div className="bg-gray-600 rounded"></div>
                    <div className="bg-gray-600 rounded"></div>
                    <div className="bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm">Dashboard Analytics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
