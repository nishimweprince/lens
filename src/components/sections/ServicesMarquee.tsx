'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ServicesMarquee: React.FC = () => {
  const services = [
    'Bookkeeping',
    'Agriculture',
    'Finance',
    'Analytics',
    'Warehousing',
    'Tax Advisory',
    'Bookkeeping',
    'Agriculture',
    'Finance',
    'Analytics',
    'Warehousing',
    'Tax Advisory',
  ];

  return (
    <section className="py-6 border-y border-slate-100 overflow-hidden bg-slate-50">
      <motion.div
        animate={{ x: '-50%' }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-slate-600 text-sm font-medium tracking-wide px-8">
              {service}
            </span>
            <span className="text-slate-300 text-lg">
              /
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
