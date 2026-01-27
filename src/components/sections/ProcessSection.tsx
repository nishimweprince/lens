'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, RefreshCw } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const features = [
    {
      icon: Check,
      title: 'Accurate Records',
      description: 'Precise financial tracking that syncs physical and digital data seamlessly.',
    },
    {
      icon: Zap,
      title: 'Offline-First',
      description: 'Works without internet, syncs when connected. Perfect for rural areas.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your financial data is protected with enterprise-grade security.',
    },
    {
      icon: RefreshCw,
      title: 'Real-time Sync',
      description: 'Automatic synchronization across all your devices and registers.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-6">
            <span className="w-8 h-px bg-slate-200" />
            Our Mission
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05] mb-6">
            Revolutionizing financial management
            <br />
            <span className="text-slate-400">for agribusiness</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-body">
            Lens Inc. provides digital bookkeeping and modern warehouses to help farmers
            with accurate financial records, data management, and prevent post-harvest losses.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#1F628E] group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              All systems operational
            </span>
            <span className="text-slate-300">|</span>
            <span>Trusted by farmers across Rwanda</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
