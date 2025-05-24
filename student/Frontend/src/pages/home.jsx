import React, { useState, useEffect } from 'react';
import { CalendarDays, Users, GraduationCap, BookOpen, Award, Bell, BarChart2, Clock, X, ChevronRight, ChevronLeft, Play, Pause, Star, CheckCircle, Calendar, UserCheck, BookMarked } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Educator</span>
        </div>
        <div className="flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>
          <a href="/students" className="text-gray-700 hover:text-blue-600">Students</a>
          <a href="/teachers" className="text-gray-700 hover:text-blue-600">Teachers</a>
        </div>
      </div>
    </div>
  </nav>
);

const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    attendance: 0
  });
  
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showTour, setShowTour] = useState(false);
  const [currentTourStep, setCurrentTourStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Tour steps data
  const tourSteps = [
    {
      title: "Welcome to Educator Platform",
      content: "This comprehensive student management system streamlines academic operations and enhances educational outcomes for institutions.",
      highlight: "hero-section",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Real-time Statistics",
      content: "Monitor key metrics including student enrollment (1,248 students), faculty strength (64 teachers), course offerings (42 courses), and attendance rates (94%) at a glance.",
      highlight: "stats-section",
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      title: "Student Management",
      content: "Comprehensive student profiles with academic records, contact information, and performance analytics. Track student progress, manage enrollments, and generate detailed reports.",
      highlight: "students-feature",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Teacher Information System",
      content: "Manage faculty information, class assignments, and evaluation metrics. View teacher schedules, track performance, and facilitate communication between staff members.",
      highlight: "teachers-feature",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Smart Attendance Tracking",
      content: "Effortlessly track student presence with digital attendance marking. Generate attendance reports, identify patterns, and send automated notifications to parents for absences.",
      highlight: "attendance-feature",
      icon: <CalendarDays className="h-6 w-6" />
    },
    {
      title: "Course Management",
      content: "Organize curriculum, upload study materials, schedule classes, and manage course assignments. Create interactive learning environments with resource sharing capabilities.",
      highlight: "courses-feature",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Examination System",
      content: "Create and manage tests, grade assignments efficiently, and publish results with comprehensive feedback. Support multiple question types and automated grading.",
      highlight: "exams-feature",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Advanced Reporting",
      content: "Generate custom reports and visualize data to make informed administrative decisions. Export reports in multiple formats and schedule automated report generation.",
      highlight: "reports-feature",
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      title: "Announcements & Events",
      content: "Stay updated with important announcements like exam schedules, registration deadlines, and system maintenance. Track upcoming events such as faculty meetings, parent-teacher conferences, and exhibitions.",
      highlight: "announcements-section",
      icon: <Bell className="h-6 w-6" />
    }
  ];

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setStats({
        students: 1248,
        teachers: 64,
        courses: 42,
        attendance: 94
      });
      
      setAnnouncements([
        { id: 1, title: "End of Semester Exams", content: "Final exams scheduled for June 10-15. Timetables now available in the portal.", date: "May 12, 2025" },
        { id: 2, title: "Summer School Registration", content: "Registration for summer courses opens May 20. Limited seats available.", date: "May 10, 2025" },
        { id: 3, title: "System Maintenance", content: "The portal will be down for maintenance on May 18 from 2-4 AM.", date: "May 8, 2025" }
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  // Auto-play tour functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && showTour) {
      interval = setInterval(() => {
        setCurrentTourStep(prev => {
          if (prev < tourSteps.length - 1) {
            return prev + 1;
          } else {
            setIsAutoPlaying(false);
            return prev;
          }
        });
      }, 4000); // 4 seconds per step
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, showTour, tourSteps.length]);

  const startTour = () => {
    setShowTour(true);
    setCurrentTourStep(0);
    setIsAutoPlaying(true);
  };

  const nextStep = () => {
    if (currentTourStep < tourSteps.length - 1) {
      setCurrentTourStep(currentTourStep + 1);
    }
  };

  const prevStep = () => {
    if (currentTourStep > 0) {
      setCurrentTourStep(currentTourStep - 1);
    }
  };

  const closeTour = () => {
    setShowTour(false);
    setIsAutoPlaying(false);
    setCurrentTourStep(0);
  };

  const features = [
    { 
      title: "Students", 
      icon: <Users className="h-8 w-8 text-blue-500" />, 
      description: "Comprehensive student profiles with academic records, contact information, and performance analytics.",
      link: "/students",
      color: "bg-blue-50 border-blue-200",
      id: "students-feature"
    },
    { 
      title: "Teachers", 
      icon: <GraduationCap className="h-8 w-8 text-green-500" />, 
      description: "Manage faculty information, class assignments, and evaluation metrics all in one place.",
      link: "/teachers",
      color: "bg-green-50 border-green-200",
      id: "teachers-feature"
    },
    { 
      title: "Attendance", 
      icon: <CalendarDays className="h-8 w-8 text-purple-500" />, 
      description: "Track student presence, generate reports, and identify attendance patterns with visual analytics.",
      link: "/attendance",
      color: "bg-purple-50 border-purple-200",
      id: "attendance-feature"
    },
    { 
      title: "Courses", 
      icon: <BookOpen className="h-8 w-8 text-red-500" />, 
      description: "Organize curriculum, upload materials, and schedule classes with our intuitive interface.",
      link: "/courses",
      color: "bg-red-50 border-red-200",
      id: "courses-feature"
    },
    { 
      title: "Examinations", 
      icon: <Award className="h-8 w-8 text-yellow-500" />, 
      description: "Create tests, grade assignments, and publish results with comprehensive feedback options.",
      link: "/exams",
      color: "bg-yellow-50 border-yellow-200",
      id: "exams-feature"
    },
    { 
      title: "Reports", 
      icon: <BarChart2 className="h-8 w-8 text-indigo-500" />, 
      description: "Generate custom reports and visualize data to make informed administrative decisions.",
      link: "/reports",
      color: "bg-indigo-50 border-indigo-200",
      id: "reports-feature"
    }
  ];

  const upcomingEvents = [
    { id: 1, title: "Faculty Meeting", date: "May 17, 2025", time: "10:00 AM" },
    { id: 2, title: "Parent-Teacher Conference", date: "May 25, 2025", time: "2:00 PM" },
    { id: 3, title: "Science Exhibition", date: "June 5, 2025", time: "9:00 AM" }
  ];

  const courseProcedures = [
    {
      step: "1",
      title: "Course Registration",
      description: "Browse available courses, check prerequisites, and enroll in desired subjects through our user-friendly interface.",
      icon: <BookMarked className="h-6 w-6 text-blue-600" />
    },
    {
      step: "2",
      title: "Access Learning Materials",
      description: "Download course materials, watch video lectures, and access digital resources 24/7 from anywhere.",
      icon: <BookOpen className="h-6 w-6 text-green-600" />
    },
    {
      step: "3",
      title: "Track Progress",
      description: "Monitor your academic progress, view grades, and receive personalized feedback from instructors.",
      icon: <BarChart2 className="h-6 w-6 text-purple-600" />
    },
    {
      step: "4",
      title: "Complete Assessments",
      description: "Take online quizzes, submit assignments, and participate in examinations through our secure platform.",
      icon: <Award className="h-6 w-6 text-orange-600" />
    }
  ];

  const courseBenefits = [
    {
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere with our mobile-responsive platform and offline content download.",
      icon: <Clock className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Expert Instructors",
      description: "Learn from qualified educators with industry experience and academic excellence.",
      icon: <Star className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "Interactive Content",
      description: "Engage with multimedia content, interactive simulations, and collaborative learning tools.",
      icon: <Play className="h-5 w-5 text-green-500" />
    },
    {
      title: "Progress Tracking",
      description: "Real-time analytics and detailed reports help you stay on track with your learning goals.",
      icon: <CheckCircle className="h-5 w-5 text-purple-500" />
    },
    {
      title: "Certification",
      description: "Earn recognized certificates and digital badges upon successful course completion.",
      icon: <Award className="h-5 w-5 text-red-500" />
    },
    {
      title: "Community Support",
      description: "Connect with peers, join study groups, and participate in discussion forums.",
      icon: <Users className="h-5 w-5 text-indigo-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Tour Modal */}
      {showTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button 
              onClick={closeTour}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                {tourSteps[currentTourStep].icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{tourSteps[currentTourStep].title}</h3>
                <span className="text-sm text-gray-500">Step {currentTourStep + 1} of {tourSteps.length}</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{tourSteps[currentTourStep].content}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  {isAutoPlaying ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
                  {isAutoPlaying ? 'Pause' : 'Auto-play'}
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevStep}
                  disabled={currentTourStep === 0}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextStep}
                  disabled={currentTourStep === tourSteps.length - 1}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                style={{ width: `${((currentTourStep + 1) / tourSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <div id="hero-section" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Educator</h1>
            <p className="text-xl mb-8">The comprehensive student management system designed to streamline academic operations and enhance educational outcomes.</p>
            <div className="flex flex-wrap gap-3">
              
              <button 
                onClick={startTour}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Take a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div id="stats-section" className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {isLoading ? (
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="p-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))
            ) : (
              <>
                <div className="p-4">
                  <p className="text-gray-500 font-medium">Students</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.students}</p>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 font-medium">Teachers</p>
                  <p className="text-3xl font-bold text-green-600">{stats.teachers}</p>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 font-medium">Courses</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.courses}</p>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 font-medium">Attendance Rate</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.attendance}%</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Features */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">System Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} id={feature.id} className={`border rounded-lg p-6 transition-all hover:shadow-md ${feature.color}`}>
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <a href={feature.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Explore {feature.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Announcements & Events */}
          <div id="announcements-section">
            {/* Announcements */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
                <a href="/announcements" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</a>
              </div>
              
              {isLoading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="mb-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))
              ) : (
                <div className="space-y-4">
                  {announcements.map(announcement => (
                    <div key={announcement.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{announcement.title}</h3>
                        <span className="text-xs text-gray-500">{announcement.date}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{announcement.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
                <a href="/events" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Calendar</a>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Procedures & Benefits Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">How to Get Started with Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Follow our simple 4-step process to begin your learning journey and unlock the full potential of our educational platform.</p>
          </div>
          
          {/* Course Taking Procedure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {courseProcedures.map((procedure, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    {procedure.icon}
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{procedure.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{procedure.title}</h3>
                <p className="text-gray-600 text-sm">{procedure.description}</p>
              </div>
            ))}
          </div>
          
          {/* Course Benefits */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Why Choose Our Learning Platform?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                  Browse All Courses
                </a>
                <a href="/enrollment-guide" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition">
                  Enrollment Guide
                </a>
                <a href="/support" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Get Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;