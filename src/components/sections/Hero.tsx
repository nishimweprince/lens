'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #0a0a0a 1px, transparent 1px),
                              linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-500">
              <span className="w-8 h-px bg-slate-300" />
              Financial Solutions for Agribusiness
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] text-slate-900 mb-8"
          >
            Record every
            <br />
            <span className="text-[#1F628E]">penny</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-md md:text-lg text-slate-500 max-w-xl leading-relaxed mb-12"
          >
            Lens Inc. revolutionizes bookkeeping for individuals and SMEs using
            innovative digital solutions. We help farmers and businesses achieve
            financial accuracy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProducts}
              className="group px-8 py-4 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all duration-300"
            >
              Explore Products
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
            >
              Get in touch
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-100 pt-12"
        >
          {[
            { value: '3+', label: 'Products' },
            { value: '100%', label: 'Offline Capable' },
            { value: '600m²', label: 'Warehouse Space' },
            { value: 'Rwanda', label: 'Based & Built' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="font-display text-3xl md:text-4xl text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProducts}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};
