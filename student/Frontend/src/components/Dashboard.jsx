import React, { useState, useEffect } from 'react';
import { Users, Briefcase, Calendar, Bell, Search, RefreshCw, ChevronDown, Check, X } from 'lucide-react';

const Dashboard = () => {
  // Sample data for demonstration
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', attendance: '92%', grade: 'A' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', attendance: '87%', grade: 'B+' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', attendance: '95%', grade: 'A-' },
  ]);

  const teachers = [
    { id: 1, name: 'Mr. Brown', subject: 'Mathematics', students: 24, rating: 4.8 },
    { id: 2, name: 'Ms. Davis', subject: 'Science', students: 18, rating: 4.9 },
    { id: 3, name: 'Mr. Wilson', subject: 'History', students: 22, rating: 4.7 },
  ];

  const attendanceData = [
    { id: 1, studentName: 'John Doe', date: '2023-10-01', status: 'Present' },
    { id: 2, studentName: 'Jane Smith', date: '2023-10-01', status: 'Absent' },
    { id: 3, studentName: 'Alice Johnson', date: '2023-10-01', status: 'Present' },
  ];

  // State for animated counter
  const [counts, setCounts] = useState({ students: 0, teachers: 0, attendance: 0 });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Animation for counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        students: prev.students < students.length ? prev.students + 1 : prev.students,
        teachers: prev.teachers < teachers.length ? prev.teachers + 1 : prev.teachers,
        attendance: prev.attendance < attendanceData.length ? prev.attendance + 1 : prev.attendance,
      }));
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  // Refresh animation
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const colorClass = status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
    const icon = status === 'Present' ? <Check size={14} /> : <X size={14} />;
    
    return (
      <span className={`flex items-center gap-1 px-2 py-1 rounded-full ${colorClass}`}>
        {icon}
        {status}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">SchoolSync Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <button 
              className="relative p-2 rounded-full hover:bg-gray-100"
              onClick={handleRefresh}
            >
              <RefreshCw 
                size={20} 
                className={`text-gray-500 ${isRefreshing ? 'animate-spin' : ''}`} 
              />
            </button>
            
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} className="text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                A
              </div>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <Users size={80} />
            </div>
            <h3 className="text-lg font-medium mb-1">Total Students</h3>
            <p className="text-4xl font-bold mb-4">{counts.students}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-100">Active enrollment</span>
              <span className="bg-white bg-opacity-30 px-2 py-1 rounded text-sm">+2% this week</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <Briefcase size={80} />
            </div>
            <h3 className="text-lg font-medium mb-1">Teaching Staff</h3>
            <p className="text-4xl font-bold mb-4">{counts.teachers}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-100">Certified teachers</span>
              <span className="bg-white bg-opacity-30 px-2 py-1 rounded text-sm">100% qualified</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <Calendar size={80} />
            </div>
            <h3 className="text-lg font-medium mb-1">Today's Attendance</h3>
            <p className="text-4xl font-bold mb-4">{counts.attendance}</p>
            <div className="flex justify-between items-center">
              <span className="text-amber-100">Records processed</span>
              <span className="bg-white bg-opacity-30 px-2 py-1 rounded text-sm">67% present</span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b">
            <nav className="flex px-6">
              <button 
                className={`py-4 px-6 font-medium ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`py-4 px-6 font-medium ${activeTab === 'students' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('students')}
              >
                Students
              </button>
              <button 
                className={`py-4 px-6 font-medium ${activeTab === 'teachers' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('teachers')}
              >
                Teachers
              </button>
              <button 
                className={`py-4 px-6 font-medium ${activeTab === 'attendance' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('attendance')}
              >
                Attendance
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Students Card */}
                <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-blue-50 p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                        <Users size={20} />
                        Students
                      </h2>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                        {students.length} total
                      </span>
                    </div>
                  </div>
                  <ul className="divide-y">
                    {students.map(student => (
                      <li key={student.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">{student.name}</p>
                            <p className="text-sm text-gray-500">{student.email}</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                              {student.attendance}
                            </span>
                            <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">
                              {student.grade}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teachers Card */}
                <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-emerald-50 p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-emerald-700 flex items-center gap-2">
                        <Briefcase size={20} />
                        Teachers
                      </h2>
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">
                        {teachers.length} total
                      </span>
                    </div>
                  </div>
                  <ul className="divide-y">
                    {teachers.map(teacher => (
                      <li key={teacher.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">{teacher.name}</p>
                            <p className="text-sm text-gray-500">{teacher.subject}</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-sm">
                              {teacher.students} students
                            </span>
                            <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-sm">
                              {teacher.rating}★
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Attendance Card */}
                <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-amber-50 p-4 border-b">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-amber-700 flex items-center gap-2">
                        <Calendar size={20} />
                        Attendance
                      </h2>
                      <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm">
                        Today
                      </span>
                    </div>
                  </div>
                  <ul className="divide-y">
                    {attendanceData.map(record => (
                      <li key={record.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">{record.studentName}</p>
                            <p className="text-sm text-gray-500">{record.date}</p>
                          </div>
                          <StatusBadge status={record.status} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'students' && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-medium text-gray-500">Students Details</h3>
                <p className="text-gray-400 mt-2">Click to view detailed student records</p>
              </div>
            )}
            
            {activeTab === 'teachers' && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-medium text-gray-500">Teachers Details</h3>
                <p className="text-gray-400 mt-2">Click to view detailed teacher information</p>
              </div>
            )}
            
            {activeTab === 'attendance' && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-medium text-gray-500">Attendance Records</h3>
                <p className="text-gray-400 mt-2">Click to view detailed attendance statistics</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SchoolSync Dashboard. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;