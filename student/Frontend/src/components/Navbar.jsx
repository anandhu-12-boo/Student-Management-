import React, { useState, useEffect } from 'react';
import { Bell, Search, Menu, X, User, ChevronDown, LogOut, Settings, HelpCircle, Users, UserPlus, CheckSquare, Shield, GraduationCap, Trash2 } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null); // null, 'principal', or 'teacher'
  const [showFacultyList, setShowFacultyList] = useState(false);
  const [showAddFaculty, setShowAddFaculty] = useState(false);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showStudents, setShowStudents] = useState(false); // State for showing students section
  const [rememberMe, setRememberMe] = useState(false);

  // Sample faculty data
  const [facultyList, setFacultyList] = useState([
    { id: 1, name: 'Dr. Sarah Johnson', subject: 'Mathematics', email: 'sarah.j@school.edu', status: 'Active' },
    { id: 2, name: 'Prof. Michael Chen', subject: 'Physics', email: 'michael.c@school.edu', status: 'Active' },
    { id: 3, name: 'Ms. Emily Davis', subject: 'English', email: 'emily.d@school.edu', status: 'Active' },
  ]);

  // State for dynamically added students
  const [addedStudentList, setAddedStudentList] = useState(() => {
    const savedStudents = localStorage.getItem('addedStudentList');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  // Sample attendance data for dynamically added students
  const [attendanceData, setAttendanceData] = useState(() => {
    const savedAttendance = localStorage.getItem('attendanceData');
    return savedAttendance ? JSON.parse(savedAttendance) : [];
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for stored credentials on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Save student data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('addedStudentList', JSON.stringify(addedStudentList));
  }, [addedStudentList]);

  // Save attendance data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
  }, [attendanceData]);

  // Login handler
  const handleLogin = (userType) => {
    setUser(userType);
    if (rememberMe) {
      localStorage.setItem('user', userType);
    }
    setIsLoginOpen(false);
    setIsMenuOpen(false);
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setIsProfileOpen(false);
    setShowFacultyList(false);
    setShowAddFaculty(false);
    setShowAddStudent(false);
    setShowAttendance(false);
    setShowStudents(false);
  };

  // Add faculty handler
  const handleAddFaculty = (newFaculty) => {
    setFacultyList([...facultyList, { ...newFaculty, id: Date.now() }]);
    setShowAddFaculty(false);
  };

  // Add student handler
  const handleAddStudent = (newStudent) => {
    const updatedStudentList = [...addedStudentList, { ...newStudent, id: Date.now() }];
    setAddedStudentList(updatedStudentList);
    setAttendanceData([...attendanceData, { ...newStudent, id: Date.now(), status: 'present', date: new Date().toISOString().split('T')[0] }]);
    setShowAddStudent(false);
  };

  // Delete student handler
  const handleDeleteStudent = (studentId) => {
    const updatedStudentList = addedStudentList.filter(student => student.id !== studentId);
    setAddedStudentList(updatedStudentList);
    const updatedAttendanceData = attendanceData.filter(student => student.id !== studentId);
    setAttendanceData(updatedAttendanceData);
  };

  // Toggle attendance status
  const toggleAttendance = (studentId) => {
    setAttendanceData(prev => prev.map(student =>
      student.id === studentId
        ? { ...student, status: student.status === 'present' ? 'absent' : 'present' }
        : student
    ));
  };

  // Simulated notifications
  const notifications = [
    { id: 1, title: "New semester schedule published", time: "10 minutes ago", isUnread: true },
    { id: 2, title: "Attendance report ready for review", time: "2 hours ago", isUnread: true },
    { id: 3, title: "System maintenance completed", time: "Yesterday", isUnread: false }
  ];

  // Navigation links based on user role
  const getNavLinks = () => {
    const baseLinks = [];

    if (user === 'principal') {
      return [
        ...baseLinks,
        { name: "Teachers", path: "/teachers" },
        { name: "Courses", path: "/courses" },
        { name: "Faculty Management", action: () => setShowFacultyList(true) },
        { name: "Student Management", action: () => setShowAddStudent(true) },
        { name: "Students", action: () => setShowStudents(true) },
      ];
    } else if (user === 'teacher') {
      return [
        ...baseLinks,
        { name: "My Classes", path: "/classes" },
        { name: "Add Student", action: () => setShowAddStudent(true) },
        { name: "Mark Attendance", action: () => setShowAttendance(true) },
        { name: "Students", action: () => setShowStudents(true) },
      ];
    }

    return baseLinks;
  };

  return (
    <React.Fragment>
      <nav className={`${scrolled || user ? 'bg-white shadow-md text-gray-800' : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'} fixed w-full z-50 transition-all duration-300`}>
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <span className={`text-2xl font-bold transition-all duration-300 transform group-hover:scale-105 ${scrolled || user ? 'text-blue-600' : 'text-white'}`}>
                  EduMaster
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {getNavLinks().map((link) => (
                <button
                  key={link.name}
                  onClick={link.action || (() => {})}
                  className={`px-3 py-2 rounded text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    scrolled || user
                      ? 'hover:bg-gray-100 hover:text-blue-600'
                      : 'hover:bg-blue-500/20 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center">
              {/* Search */}
              <div className={`relative rounded-full overflow-hidden mr-2 transition-all duration-300 ${scrolled || user ? 'bg-gray-100' : 'bg-blue-500/20'} flex items-center hover:shadow-md`}>
                <input
                  type="text"
                  placeholder="Search..."
                  className={`px-4 py-1 pr-8 text-sm focus:outline-none transition-all duration-300 focus:w-64 w-40 ${
                    scrolled || user ? 'bg-gray-100 placeholder-gray-500' : 'bg-transparent placeholder-blue-100'
                  }`}
                />
                <Search className={`absolute right-2 h-4 w-4 transition-colors duration-300 ${scrolled || user ? 'text-gray-500' : 'text-blue-100'}`} />
              </div>

              {/* Notifications */}
              {user && (
                <div className="relative">
                  <button
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    className={`p-2 rounded-full relative transition-all duration-200 transform hover:scale-110 ${
                      scrolled || user ? 'hover:bg-gray-100' : 'hover:bg-blue-500/20'
                    }`}
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  </button>

                  {isNotificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-10 overflow-hidden">
                      <div className="p-4 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div key={notification.id} className={`p-4 hover:bg-gray-50 cursor-pointer ${notification.isUnread ? 'bg-blue-50' : ''}`}>
                            <p className={`text-sm ${notification.isUnread ? 'font-medium text-gray-800' : 'text-gray-700'}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* User Profile or Login */}
              {user ? (
                <div className="relative ml-3">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
                  >
                    <div className={`h-8 w-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${scrolled || user ? 'border-indigo-100' : 'border-blue-400'} flex items-center justify-center ${user === 'principal' ? 'bg-purple-500' : 'bg-green-500'}`}>
                      {user === 'principal' ? <Shield className="h-4 w-4 text-white" /> : <GraduationCap className="h-4 w-4 text-white" />}
                    </div>
                    <div className="hidden lg:flex items-center">
                      <span className="text-sm font-medium mr-1">
                        {user === 'principal' ? 'Principal' : 'Teacher'}
                      </span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: isProfileOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </div>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 py-1">
                      <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                        <User className="h-4 w-4 mr-2 text-gray-500" />
                        Your Profile
                      </a>
                      {user === 'principal' && (
                        <>
                          <button
                            onClick={() => {setShowAddFaculty(true); setIsProfileOpen(false);}}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          >
                            <UserPlus className="h-4 w-4 mr-2 text-gray-500" />
                            Add Faculty
                          </button>
                          <button
                            onClick={() => {setShowAddStudent(true); setIsProfileOpen(false);}}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          >
                            <UserPlus className="h-4 w-4 mr-2 text-gray-500" />
                            Add Student
                          </button>
                        </>
                      )}
                      <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                        <Settings className="h-4 w-4 mr-2 text-gray-500" />
                        Settings
                      </a>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <LogOut className="h-4 w-4 mr-2 text-red-500" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative ml-3">
                  <button
                    onClick={() => setIsLoginOpen(!isLoginOpen)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                      scrolled || user ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <User className="h-4 w-4" />
                    <span className="text-sm font-medium">Login</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: isLoginOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </button>

                  {isLoginOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="flex justify-between items-center p-6 border-b">
                          <h2 className="text-xl font-semibold text-gray-800">Login</h2>
                          <button
                            onClick={() => setIsLoginOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <X className="h-6 w-6" />
                          </button>
                        </div>
                        <div className="p-6 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input
                              type="text"
                              id="username"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                              type="password"
                              id="password"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="remember-me"
                              checked={rememberMe}
                              onChange={() => setRememberMe(!rememberMe)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                              Remember me
                            </label>
                          </div>
                          <div className="flex justify-end space-x-3 pt-4">
                            <button
                              type="button"
                              onClick={() => setIsLoginOpen(false)}
                              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const username = document.getElementById('username').value;
                                const password = document.getElementById('password').value;

                                if (username && password) {
                                  if ((username === 'principal' && password === 'principal123') || (username === 'teacher' && password === 'teacher123')) {
                                    handleLogin(username);
                                  } else {
                                    alert('Invalid credentials');
                                  }
                                }
                              }}
                              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                  scrolled || user ? 'text-gray-600 hover:bg-gray-100' : 'text-blue-100 hover:bg-blue-500/20 hover:text-white'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {getNavLinks().map((link) => (
                <button
                  key={link.name}
                  onClick={link.action || (() => {})}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}

              {!user && (
                <div className="pt-2 border-t border-gray-200">
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    <Shield className="h-4 w-4 mr-2 text-purple-500" />
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Faculty List Modal (Principal only) */}
      {showFacultyList && user === 'principal' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Faculty Management</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowAddFaculty(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Faculty
                </button>
                <button
                  onClick={() => setShowFacultyList(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="grid gap-4">
                {facultyList.map((faculty) => (
                  <div key={faculty.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">{faculty.name}</h3>
                        <p className="text-gray-600">{faculty.subject}</p>
                        <p className="text-sm text-gray-500">{faculty.email}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        faculty.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {faculty.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Faculty Modal */}
      {showAddFaculty && user === 'principal' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Add New Faculty</h2>
              <button
                onClick={() => setShowAddFaculty(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="faculty-name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="faculty-subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="faculty-email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddFaculty(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // Get values from inputs
                    const name = document.getElementById('faculty-name').value;
                    const subject = document.getElementById('faculty-subject').value;
                    const email = document.getElementById('faculty-email').value;

                    if (name && subject && email) {
                      handleAddFaculty({
                        name,
                        subject,
                        email,
                        status: 'Active'
                      });
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Add Faculty
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {showAddStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Add New Student</h2>
              <button
                onClick={() => setShowAddStudent(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="student-name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Roll No</label>
                <input
                  type="text"
                  id="student-rollNo"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="student-email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddStudent(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // Get values from inputs
                    const name = document.getElementById('student-name').value;
                    const rollNo = document.getElementById('student-rollNo').value;
                    const email = document.getElementById('student-email').value;

                    if (name && rollNo && email) {
                      handleAddStudent({
                        name,
                        rollNo,
                        email,
                        status: 'Active'
                      });
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Students Section Modal */}
      {showStudents && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Students</h2>
              <button
                onClick={() => setShowStudents(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="grid gap-4">
                {addedStudentList.map((student) => (
                  <div key={student.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">{student.name}</h3>
                        <p className="text-gray-600">Roll No: {student.rollNo}</p>
                        <p className="text-sm text-gray-500">{student.email}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Modal (Teacher only) */}
      {showAttendance && user === 'teacher' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Mark Attendance - Today</h2>
              <button
                onClick={() => setShowAttendance(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="space-y-3">
                {attendanceData.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow duration-200">
                    <div>
                      <h3 className="font-medium text-gray-800">{student.name}</h3>
                      <p className="text-sm text-gray-500">Roll No: {student.rollNo}</p>
                    </div>
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                        student.status === 'present'
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                      }`}
                    >
                      <CheckSquare className="h-4 w-4 mr-2" />
                      {student.status === 'present' ? 'Present' : 'Absent'}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => {
                    alert('Attendance saved successfully!');
                    setShowAttendance(false);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Save Attendance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
