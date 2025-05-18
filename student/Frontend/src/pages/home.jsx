import React, { useState, useEffect } from 'react';
import { CalendarDays, Users, GraduationCap, BookOpen, Award, Bell, BarChart2, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';



const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    attendance: 0
  });
  
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const features = [
    { 
      title: "Students", 
      icon: <Users className="h-8 w-8 text-blue-500" />, 
      description: "Comprehensive student profiles with academic records, contact information, and performance analytics.",
      link: "/students",
      color: "bg-blue-50 border-blue-200"
    },
    { 
      title: "Teachers", 
      icon: <GraduationCap className="h-8 w-8 text-green-500" />, 
      description: "Manage faculty information, class assignments, and evaluation metrics all in one place.",
      link: "/teachers",
      color: "bg-green-50 border-green-200"
    },
    { 
      title: "Attendance", 
      icon: <CalendarDays className="h-8 w-8 text-purple-500" />, 
      description: "Track student presence, generate reports, and identify attendance patterns with visual analytics.",
      link: "/attendance",
      color: "bg-purple-50 border-purple-200"
    },
    { 
      title: "Courses", 
      icon: <BookOpen className="h-8 w-8 text-red-500" />, 
      description: "Organize curriculum, upload materials, and schedule classes with our intuitive interface.",
      link: "/courses",
      color: "bg-red-50 border-red-200"
    },
    { 
      title: "Examinations", 
      icon: <Award className="h-8 w-8 text-yellow-500" />, 
      description: "Create tests, grade assignments, and publish results with comprehensive feedback options.",
      link: "/exams",
      color: "bg-yellow-50 border-yellow-200"
    },
    { 
      title: "Reports", 
      icon: <BarChart2 className="h-8 w-8 text-indigo-500" />, 
      description: "Generate custom reports and visualize data to make informed administrative decisions.",
      link: "/reports",
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  const upcomingEvents = [
    { id: 1, title: "Faculty Meeting", date: "May 17, 2025", time: "10:00 AM" },
    { id: 2, title: "Parent-Teacher Conference", date: "May 25, 2025", time: "2:00 PM" },
    { id: 3, title: "Science Exhibition", date: "June 5, 2025", time: "9:00 AM" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Educator</h1>
            <p className="text-xl mb-8">The comprehensive student management system designed to streamline academic operations and enhance educational outcomes.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/dashboard" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Go to Dashboard
              </a>
              <a href="/tour" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
                Take a Tour
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8">
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
                <div key={index} className={`border rounded-lg p-6 transition-all hover:shadow-md ${feature.color}`}>
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
          <div>
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
      
      {/* Quick Access Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="/students/add" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <Users className="h-8 w-8 mx-auto text-blue-500 mb-3" />
              <p className="font-medium">Add Student</p>
            </a>
            <a href="/attendance/mark" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <CalendarDays className="h-8 w-8 mx-auto text-green-500 mb-3" />
              <p className="font-medium">Mark Attendance</p>
            </a>
            <a href="/reports/generate" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <BarChart2 className="h-8 w-8 mx-auto text-purple-500 mb-3" />
              <p className="font-medium">Generate Reports</p>
            </a>
            <a href="/announcements/create" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <Bell className="h-8 w-8 mx-auto text-red-500 mb-3" />
              <p className="font-medium">Create Announcement</p>
            </a>
          </div>
        </div>
      </div>
      
      {/* Help Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Need Help Getting Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Our documentation and support team are here to help you make the most of the EduMaster Pro system.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/docs" className="bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
              View Documentation
            </a>
            <a href="/support" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Contact Support
            </a>
          </div>
        </div>
      </div>
      
  
    </div>
  );
};

export default Home;