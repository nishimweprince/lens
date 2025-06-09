'use client';

import React from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="text-xl md:text-2xl font-bold text-black">
              UWWA
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-black transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-black transition-colors">
              Services
            </a>
            <a href="#process" className="text-gray-700 hover:text-black transition-colors">
              Process
            </a>
            <a href="#cases" className="text-gray-700 hover:text-black transition-colors">
              Cases
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:block">
              Book a call
            </Button>
            <Button variant="primary" size="sm">
              Let's connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
