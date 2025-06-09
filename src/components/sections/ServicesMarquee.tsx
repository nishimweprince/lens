'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ServicesMarquee: React.FC = () => {
  const services = [
    'BOOKKEEPING',
    'AGRICULTURE',
    'FINANCE',
    'ANALYTICS',
    'BOOKKEEPING',
    'AGRICULTURE',
    'FINANCE',
    'ANALYTICS',
  ];

  return (
    <section className="py-8 border-y border-gray-200 overflow-hidden bg-green-50">
      <motion.div
        animate={{ x: '-50%' }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-green-600 text-sm font-medium px-8">
              {service}
            </span>
            {index < services.length - 1 && (
              <span className="text-green-400 text-sm">
                {index % 2 === 0 ? '•' : '→'}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
