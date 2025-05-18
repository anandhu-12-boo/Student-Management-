import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white py-6">
      <div className="max-w-5xl mx-auto px-4">
        {/* Main Content - Single Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Logo and Copyright */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">Student Management System</h3>
            <p className="text-sm text-gray-200">
              Streamlining education administration since 2022
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="/admin-login" className="flex items-center hover:text-purple-200 transition-colors">
              <Shield size={16} className="mr-1" />
              Admin Login
            </a>
            <a href="/teacher-dashboard" className="hover:text-purple-200 transition-colors">
              Teacher Dashboard
            </a>
            <a href="/features" className="hover:text-purple-200 transition-colors">
              Features
            </a>
            <a href="/help" className="hover:text-purple-200 transition-colors">
              Help
            </a>
          </div>
          
          {/* Contact and Social */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-1" />
              <span className="text-sm">support@studentms.edu</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="hover:text-purple-200 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Line */}
        <div className="border-t border-purple-500 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Student Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;