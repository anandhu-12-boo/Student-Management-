import React, { useState, useEffect } from 'react';
import { Bell, Search, Menu, X, User, ChevronDown, LogOut, Settings, HelpCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulated notifications
  const notifications = [
    { id: 1, title: "New semester schedule published", time: "10 minutes ago", isUnread: true },
    { id: 2, title: "Attendance report ready for review", time: "2 hours ago", isUnread: true },
    { id: 3, title: "System maintenance completed", time: "Yesterday", isUnread: false }
  ];

  // Navigation links - Removed "Attendance" and "Reports"
  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Students", path: "/students" },
    { name: "Teachers", path: "/teachers" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <nav className={`${scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'} fixed w-full z-10 transition-all duration-300`}>
      {/* Double width navbar container - extra wide for maximum content space */}
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand - Added animation */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <span className={`text-2xl font-bold transition-all duration-300 transform group-hover:scale-105 ${scrolled ? 'text-blue-600' : 'text-white'}`}>Educator</span>
            </a>
          </div>

          {/* Desktop Navigation Links - Added hover animations */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.path}
                className={`px-3 py-2 rounded text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  scrolled 
                    ? 'hover:bg-gray-100 hover:text-blue-600' 
                    : 'hover:bg-blue-500/20 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side icons - Added animations */}
          <div className="hidden md:flex items-center">
            {/* Search with animation */}
            <div className={`relative rounded-full overflow-hidden mr-2 transition-all duration-300 ${scrolled ? 'bg-gray-100' : 'bg-blue-500/20'} flex items-center hover:shadow-md`}>
              <input
                type="text"
                placeholder="Search..."
                className={`px-4 py-1 pr-8 text-sm focus:outline-none transition-all duration-300 focus:w-64 w-40 ${
                  scrolled ? 'bg-gray-100 placeholder-gray-500' : 'bg-transparent placeholder-blue-100'
                }`}
              />
              <Search className={`absolute right-2 h-4 w-4 transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-blue-100'}`} />
            </div>

            {/* Notifications with animation */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className={`p-2 rounded-full relative transition-all duration-200 transform hover:scale-110 ${
                  scrolled 
                    ? 'hover:bg-gray-100' 
                    : 'hover:bg-blue-500/20'
                }`}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </button>

              {/* Notifications Dropdown with animation */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-10 overflow-hidden animate-fadeIn">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                      <a href="/notifications" className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200">View All</a>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-all duration-200 animate-slideIn ${notification.isUnread ? 'bg-blue-50' : ''}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex justify-between">
                          <p className={`text-sm ${notification.isUnread ? 'font-medium text-gray-800' : 'text-gray-700'}`}>
                            {notification.title}
                          </p>
                          {notification.isUnread && (
                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile with animation */}
            <div className="relative ml-3">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
              >
                <div className={`h-8 w-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${scrolled ? 'border-indigo-100' : 'border-blue-400'}`}>
                  <img
                    src="/api/placeholder/40/40"
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="hidden lg:flex items-center">
                  <span className="text-sm font-medium mr-1">Admin User</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: isProfileOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </div>
              </button>

              {/* Profile Dropdown with animation */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 py-1 animate-fadeIn">
                  <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    Your Profile
                  </a>
                  <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                    <Settings className="h-4 w-4 mr-2 text-gray-500" />
                    Settings
                  </a>
                  <a href="/help" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                    <HelpCircle className="h-4 w-4 mr-2 text-gray-500" />
                    Help Center
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <a href="/logout" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-200">
                    <LogOut className="h-4 w-4 mr-2 text-red-500" />
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-blue-100 hover:bg-blue-500/20 hover:text-white'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-all duration-300 transform rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 animate-fadeInSlideRight"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile search */}
            <div className="px-3 py-2 animate-fadeIn" style={{ animationDelay: '400ms' }}>
              <div className="relative rounded-md overflow-hidden bg-gray-100 flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full px-4 py-2 text-gray-700 bg-gray-100 focus:outline-none transition-all duration-300"
                />
                <Search className="absolute right-3 h-5 w-5 text-gray-500" />
              </div>
            </div>
            
            {/* Mobile user section */}
            <div className="pt-4 pb-3 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/api/placeholder/40/40"
                    alt="User avatar"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Admin User</div>
                  <div className="text-sm font-medium text-gray-500">admin@edumaster.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <a href="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                  Your Profile
                </a>
                <a href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                  Settings
                </a>
                <a href="/help" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                  Help Center
                </a>
                <a href="/logout" className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200">
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;