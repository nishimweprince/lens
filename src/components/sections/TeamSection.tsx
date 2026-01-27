'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, Award } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const founders = [
    {
      name: 'Shingiro Christian',
      role: 'Managing Director',
      credential: 'CPA',
      description: 'Well-rounded leader with technical competencies in audit, accounting, finance, tax advisory, data analytics, and sales.',
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
      expertise: ['Finance', 'Tax Advisory', 'Data Analytics'],
    },
    {
      name: 'Ntabana Kevin Joshua',
      role: 'Chief of Strategy',
      credential: 'Communications',
      description: 'Integral, passionate, and committed team player, skilled in administration and public relations.',
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
      expertise: ['Administration', 'Public Relations', 'Team Building'],
    },
    {
      name: 'Tusifu Edison',
      role: 'Chief Technical Officer',
      credential: 'CTO',
      description: 'Well-versed in technology and writing code to create reliable and user-friendly systems.',
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
      expertise: ['Software Development', 'System Architecture', 'Product Design'],
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-6">
            <span className="w-8 h-px bg-slate-200" />
            Founding Members
            <span className="w-8 h-px bg-slate-200" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05] mb-6">
            Meet the team
            <br />
            <span className="text-[#1F628E]">behind Lens</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our founding team brings together expertise in finance, technology, and
            business development to revolutionize financial management in Rwanda.
          </p>
        </motion.div>

        {/* Team Grid with Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group ${index === 1 ? 'lg:mt-12' : ''}`}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#1F628E] transition-all duration-500 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                    width={400}
                    height={500}
                  />

                  {/* Credential Badge */}
                  <div className="absolute top-4 right-4 bg-[#1F628E] text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3 h-3" />
                    {founder.credential}
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Social Links (appear on hover) */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button className="flex-1 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-xs font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </button>
                    <button className="flex-1 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-xs font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Name & Role */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-[#1F628E] font-medium">
                      {founder.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {founder.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {founder.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
