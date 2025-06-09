'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../ui/Heading';

export const ProcessSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-sm text-green-600 uppercase tracking-wider font-semibold">
              / OUR MISSION /
            </div>
            <Heading level={2} className="text-black">
              Revolutionizing Financial Management with Lens
            </Heading>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lens Inc. Ltd provides digital bookkeeping and modern warehouses to help farmers with accurate financial records, data management, and prevent post-harvest losses. We develop simple and user-friendly reporting systems that sync physical and digital financial data.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Accurate financial record keeping</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Digital and physical data synchronization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Post-harvest loss prevention</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Heading level={3} className="text-black">
                Empowering Agriculture
              </Heading>
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 rounded-full px-6 py-2 text-white text-sm font-medium">
                  ✓
                </div>
                <div className="text-gray-500 text-sm">
                  BOOKKEEPING /FINANCE/ ANALYTICS/
                </div>
                <div className="ml-auto text-green-600 text-sm font-medium">
                  ACTIVE 100%
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex items-center justify-center shadow-lg border border-green-100">
              <div className="text-center space-y-4">
                <div className="bg-green-600 rounded-lg w-48 h-32 mx-auto flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 w-32 h-20">
                    <div className="bg-green-400 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <div className="bg-green-400 rounded flex items-center justify-center">
                      <div className="w-6 h-2 bg-white rounded"></div>
                    </div>
                    <div className="bg-green-400 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-green-400 rounded flex items-center justify-center">
                      <div className="w-6 h-3 bg-white rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm">Financial Dashboard</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
