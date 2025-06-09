'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ServicesMarquee: React.FC = () => {
  const services = [
    'HEALTHCARE',
    'EFFICIENCY',
    'INNOVATION',
    'ANALYTICS',
    'HEALTHCARE',
    'EFFICIENCY',
    'INNOVATION',
    'ANALYTICS',
  ];

  return (
    <section className="py-8 border-y border-gray-200 overflow-hidden">
      <motion.div
        animate={{ x: '-50%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-400 text-sm font-medium px-8">
              {service}
            </span>
            {index < services.length - 1 && (
              <span className="text-gray-400 text-sm">
                {index % 2 === 0 ? '•' : '→'}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
