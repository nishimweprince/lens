'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../ui/Heading';

export const UmuhinziSection: React.FC = () => {
  const features = [
    'All-in-one bookkeeping for agribusinesses',
    'Physical and digital data synchronization',
    'Offline mobile app with cloud sync',
    'Financial reporting and analytics',
    'Inventory and crop management',
    'Tax compliance and audit support',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.section
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
            aria-label="Umuhinzi Platform Features"
          >
            <header className="space-y-6">
              <p className="text-sm text-green-600 uppercase tracking-wider font-semibold font-futura">
                / UMUHINZI PLATFORM /
              </p>
              <Heading level={2} className="text-black">
                Agribusiness Bookkeeping Made Simple
              </Heading>
              <p className="text-gray-600 text-lg leading-relaxed">
                Umuhinzi provides comprehensive bookkeeping solutions for agribusinesses. Our user-friendly platform reconciles physical registers with digital records, helping farmers maintain consistent transaction records of any size.
              </p>
            </header>
            <section className="space-y-4">
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
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></span>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </section>
            <footer className="pt-6">
              <a
                href="https://lisabook.lens.rw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-green-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Try LisaBook Now
              </a>
            </footer>
          </motion.section>
          
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
            aria-label="Umuhinzi Dashboard Preview"
          >
            <article className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <section className="aspect-square bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 flex flex-col items-center justify-center text-white">
                <div className="w-full h-32 bg-green-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold" role="img" aria-label="Dashboard">📊</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Umuhinzi Dashboard</h3>
                  <p className="text-green-100 text-sm">Real-time farm analytics</p>
                </div>
                <div className="w-full mt-4 space-y-2">
                  <div className="bg-green-400 rounded h-2"></div>
                  <div className="bg-green-300 rounded h-2 w-3/4"></div>
                  <div className="bg-green-200 rounded h-2 w-1/2"></div>
                </div>
              </section>
            </article>
            <span className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 rounded-full opacity-60" aria-hidden="true"></span>
            <span className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-200 rounded-full opacity-40" aria-hidden="true"></span>
          </motion.aside>
        </div>
      </main>
    </section>
  );
};
