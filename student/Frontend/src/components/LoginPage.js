// LoginPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Shield, GraduationCap, User, Lock } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [userType, setUserType] = useState('teacher'); // 'teacher' or 'principal'
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Login:', { email, password, userType, rememberMe });
    history.push(`/${userType}/dashboard`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setUserType('principal')}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${userType === 'principal' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border border-purple-600'}`}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Principal
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('teacher')}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${userType === 'teacher' ? 'bg-green-600 text-white' : 'bg-white text-green-600 border border-green-600'}`}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Teacher
                </button>
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
