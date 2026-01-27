'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cloud, Database, FileSpreadsheet, Leaf, Shield, ArrowUpRight } from 'lucide-react';

export const UmuhinziSection: React.FC = () => {
  const features = [
    { icon: FileSpreadsheet, text: 'All-in-one bookkeeping for agribusinesses' },
    { icon: Cloud, text: 'Physical and digital data synchronization' },
    { icon: Database, text: 'Offline mobile app with cloud sync' },
    { icon: BarChart3, text: 'Financial reporting and analytics' },
    { icon: Leaf, text: 'Inventory and crop management' },
    { icon: Shield, text: 'Tax compliance and audit support' },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                <span className="w-8 h-px bg-slate-200" />
                Umuhinzi Platform
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05]">
                Agribusiness bookkeeping
                <br />
                <span className="text-slate-400">made simple</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg font-body">
                Umuhinzi provides comprehensive bookkeeping solutions for agribusinesses.
                Our user-friendly platform reconciles physical registers with digital records.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <feature.icon className="w-5 h-5 text-[#1F628E] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://lisabook.lens.rw"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all duration-300"
              >
                Try LisaBook Now
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="flex-1 h-6 bg-white rounded-md border border-slate-100" />
              </div>

              {/* Dashboard content */}
              <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Farm Balance</p>
                    <p className="font-display text-2xl text-slate-900">RWF 4,250,000</p>
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">+8.2%</div>
                </div>

                {/* Chart bars */}
                <div className="h-24 flex items-end gap-2">
                  {[35, 50, 40, 65, 45, 75, 55, 80, 60, 70, 50, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className={`flex-1 rounded-sm ${i === 11 ? 'bg-[#1F628E]' : 'bg-slate-100'}`}
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  {[
                    { label: 'Revenue', value: '2.8M' },
                    { label: 'Expenses', value: '1.5M' },
                    { label: 'Crops', value: '12' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-lg font-medium text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 bg-[#1F628E] text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <p className="text-xs opacity-70">Synced</p>
              <p className="text-sm font-medium">Just now</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
