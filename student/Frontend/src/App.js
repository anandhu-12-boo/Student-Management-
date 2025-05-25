import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';




const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/students" element={<StudentInfo />} />
            <Route path="/teachers" element={<TeacherInfo />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<ManagementCourses />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
