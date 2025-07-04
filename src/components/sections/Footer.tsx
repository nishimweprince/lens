'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-xl font-bold text-black">Lens</div>
            <p className="text-gray-600 text-sm">
              © 2024 Lens Inc. Ltd. All rights reserved.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-black">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-black transition-colors text-sm">Home</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors text-sm">Products</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors text-sm">Services</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-black transition-colors text-sm">Team</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-black">Social</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Twitter</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-black">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="bg-lens-primary rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium font-futura">Home</span>
              </div>
              <a href="#products" className="text-gray-600 hover:text-black transition-colors text-sm">Products</a>
              <a href="#services" className="text-gray-600 hover:text-black transition-colors text-sm">Services</a>
              <a href="#team" className="text-gray-600 hover:text-black transition-colors text-sm">Team</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 bg-lens-primary rounded-full flex items-center justify-center text-white hover:bg-lens-primary-600 transition-colors">
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
