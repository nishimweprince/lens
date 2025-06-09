'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../ui/Heading';

export const WarehouseSection: React.FC = () => {
  const features = [
    'Commercial storage for agriculture products',
    '600 sq. meters initial capacity',
    'Maize, beans, and other crop storage',
    'Revenue generation through rentals',
    'Post-harvest loss prevention',
    'Supply chain optimization',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="text-sm text-amber-600 uppercase tracking-wider font-semibold font-futura">
                / WAREHOUSES & FOOD SUPPLY /
              </div>
              <Heading level={2} className="text-black">
                Modern Storage Solutions
              </Heading>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commercial warehouse space is vital to the supply chain, storing agriculture products including maize, beans, and others. This initiative supports long-term business sustainability while preventing post-harvest losses.
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
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
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
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
              <div className="aspect-square bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 flex flex-col items-center justify-center text-white">
                <div className="w-full h-32 bg-amber-400 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold">🏭</div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Warehouse Management</h3>
                  <p className="text-amber-100 text-sm">600m² storage capacity</p>
                </div>
                <div className="w-full mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-amber-400 rounded h-6 flex items-center justify-center text-xs">50% Rental</div>
                  <div className="bg-amber-300 rounded h-6 flex items-center justify-center text-xs">50% Lens</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-200 rounded-full opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
