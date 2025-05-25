import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Shield,
  MapPin,
  Clock,
  Users,
  BookOpen,
  Award,
  ArrowUp,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Student Portal', href: '#' },
    { name: 'Faculty Dashboard', href: '#' },
    { name: 'Course Catalog', href: '#' },
    { name: 'Academic Calendar', href: '#' },
    { name: 'Library Resources', href: '#' }
  ];

  const services = [
    { name: 'Enrollment Services', href: '#' },
    { name: 'Grade Management', href: '#' },
    { name: 'Attendance Tracking', href: '#' },
    { name: 'Report Generation', href: '#' },
    { name: 'Communication Hub', href: '#' }
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'Technical Support', href: '#' },
    { name: 'User Guides', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Training Videos', href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group z-10"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-lg mr-3">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Educator
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering educational institutions with cutting-edge management solutions.
              Streamline operations, enhance communication, and boost academic success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Users size={20} className="mx-auto mb-1 text-blue-300" />
                <div className="text-lg font-bold">10K+</div>
                <div className="text-xs text-gray-400">Active Users</div>
              </div>
              <div className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Award size={20} className="mx-auto mb-1 text-purple-300" />
                <div className="text-lg font-bold">500+</div>
                <div className="text-xs text-gray-400">Institutions</div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { Icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                { Icon: Instagram, href: '#', color: 'hover:text-pink-400' }
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center">
              <ChevronRight size={16} className="mr-2 text-blue-300" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => alert(`Navigate to ${link.name}`)}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center">
              <ChevronRight size={16} className="mr-2 text-purple-300" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => alert(`Navigate to ${service.name}`)}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                    <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center">
              <ChevronRight size={16} className="mr-2 text-green-300" />
              Support & Updates
            </h4>

            {/* Support Links */}
            <ul className="space-y-3 mb-6">
              {support.slice(0, 3).map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => alert(`Navigate to ${item.name}`)}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                    <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <h5 className="font-medium mb-3 text-sm">Stay Updated</h5>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-2 rounded text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                <Mail size={20} className="text-blue-300" />
              </div>
              <div>
                <h6 className="font-medium text-sm text-gray-300">Email Us</h6>
                <p className="text-white">educator@gamil.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                <Phone size={20} className="text-green-300" />
              </div>
              <div>
                <h6 className="font-medium text-sm text-gray-300">Call Us</h6>
                <p className="text-white">+91 9526612042</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                <MapPin size={20} className="text-purple-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Educator. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Transforming education management since 2022
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </button>
              <div className="flex items-center text-green-300">
                <Shield size={16} className="mr-1" />
                <span className="text-sm">Secure & Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;
