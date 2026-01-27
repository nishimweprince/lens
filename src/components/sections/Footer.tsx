'use client';

import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-900">Lens Inc. Ltd</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Revolutionizing bookkeeping for individuals and SMEs using innovative digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-slate-500 hover:text-[#1F628E] transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#team" className="text-slate-500 hover:text-[#1F628E] transition-colors text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-500 hover:text-[#1F628E] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-500 hover:text-[#1F628E] transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-[#1F628E] transition-colors text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-[#1F628E] transition-colors text-sm">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Lens Inc. Ltd. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-[#1F628E] transition-colors uppercase tracking-wider"
          >
            Back to top
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
