'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Smartphone, Warehouse, Calculator, FileText } from 'lucide-react';

export const ServicesDetail: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Agribusiness Bookkeeping',
      description: 'Comprehensive financial tracking designed specifically for agricultural operations.',
    },
    {
      icon: Smartphone,
      title: 'Personal Finance App',
      description: 'Track debts, manage budgets, and monitor expenses with Nyibutsa.',
    },
    {
      icon: Warehouse,
      title: 'Warehouse Solutions',
      description: 'Commercial storage facilities to prevent post-harvest losses.',
    },
    {
      icon: Calculator,
      title: 'Tax Advisory',
      description: 'Expert guidance on tax compliance and financial planning for SMEs.',
    },
    {
      icon: FileText,
      title: 'Financial Reports',
      description: 'Automated reporting that bridges physical registers and digital records.',
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-6 font-body">
            <span className="w-8 h-px bg-slate-200" />
            Our Products
            <span className="w-8 h-px bg-slate-200" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05] mb-6">
            Solutions that work
            <br />
            <span className="text-[#1F628E]">for you</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-body">
            From agribusiness bookkeeping to personal finance tracking and commercial
            storage, we provide the tools you need to succeed.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative cursor-pointer bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-500 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#1F628E] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#1F628E] group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="font-display text-xl text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 rounded-2xl p-8 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="font-display text-xl mb-3">
                Need a custom solution?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Let&apos;s discuss how we can tailor our services to your specific needs.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all duration-300"
              >
                Contact us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
