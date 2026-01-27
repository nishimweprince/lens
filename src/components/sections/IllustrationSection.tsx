'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, BarChart3 } from 'lucide-react';

export const IllustrationSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative bg-slate-50 rounded-2xl p-8 md:p-16 lg:p-24 overflow-hidden"
        >
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #0a0a0a 1px, transparent 0)`,
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                <span className="w-8 h-px bg-slate-200" />
                Why Lens
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05]">
                Financial clarity for
                <br />
                <span className="text-[#1F628E]">every business</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md font-body">
                Our integrated platform brings together bookkeeping, analytics,
                and storage solutions in one seamless experience.
              </p>
            </div>

            {/* Right - Dashboard mockup */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Total Balance</p>
                    <p className="font-display text-2xl md:text-3xl text-slate-900">RWF 2,450,000</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                    <TrendingUp size={16} />
                    +12.5%
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 mb-8 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-1 bg-slate-100 rounded-t"
                    />
                  ))}
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Wallet, label: 'Income', value: '1.2M' },
                    { icon: BarChart3, label: 'Expenses', value: '750K' },
                    { icon: TrendingUp, label: 'Savings', value: '450K' },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-3 bg-slate-50 rounded-lg">
                      <item.icon className="w-5 h-5 mx-auto mb-2 text-slate-400" />
                      <p className="text-xs text-slate-400 mb-1">{item.label}</p>
                      <p className="font-medium text-slate-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-[#1F628E] text-white p-4 rounded-xl shadow-lg"
              >
                <p className="text-xs opacity-70 mb-1">This month</p>
                <p className="font-display text-xl">+15 Transactions</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
