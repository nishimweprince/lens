'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    project: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-300 text-lg mb-8">
              We provide free consultations on financial management, bookkeeping solutions, and digital transformation for your business. Get expert advice on improving your financial accuracy and data management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  CONTACT US
                </h3>
                <div className="space-y-2">
                  <p className="text-white">info@lens.rw</p>
                  <p className="text-white">+250 788 552 790</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      FIRST & LAST NAME
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      EMAIL
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    ABOUT YOUR PROJECT
                  </label>
                  <Textarea
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full bg-white text-black hover:bg-gray-100"
                >
                  Send message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
