'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../ui/Heading';
import Image from 'next/image';

export const TeamSection: React.FC = () => {
  const founders = [
    {
      name: 'Shingiro Christian',
      role: 'Managing Director, CPA',
      description: 'Well-rounded leader with technical competencies in audit, accounting, finance, tax advisory, data analytics, and sales.',
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
    },
    {
      name: 'Ntabana Kevin Joshua',
      role: 'Admin & PR',
      description: 'Integral, passionate, and committed team player, skilled in administration and public relations.',
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
    },
    {
      name: 'Tusifu Edison',
      role: 'Chief Technical Officer (CTO)',
      description: 'Well-versed in technology and writing code to create reliable and user-friendly systems.',
      image: 'https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6',
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-lens-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm text-lens-primary uppercase tracking-wider font-semibold mb-4 font-futura">
            / FOUNDING MEMBERS /
          </div>
          <Heading level={2} className="text-black mb-6">
            Meet Our Founders
          </Heading>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our founding team brings together expertise in finance, technology, and business development to revolutionize financial management in Rwanda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black">{founder.name}</h3>
                <p className="text-lens-primary font-medium">{founder.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{founder.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
