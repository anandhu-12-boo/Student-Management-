import React, { useState, useEffect } from 'react';
import { Search, Filter, Book, Clock, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';

const ManagementCourses = () => {
  // Sample data for management courses
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    level: 'all',
    specialization: 'all',
    duration: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  
  // Specializations in management
  const specializations = [
    'General Management',
    'Human Resources',
    'Marketing Management',
    'Financial Management',
    'Operations Management',
    'Strategic Management',
    'Project Management',
    'Supply Chain Management',
    'International Business'
  ];

  useEffect(() => {
    // Simulate API call with sample management course data
    const fetchCourses = async () => {
      try {
        // In a real application, you would fetch from your API
        // const response = await axios.get('http://localhost:5000/api/management-courses');
        
        // Sample data for demonstration
        const sampleCourses = [
          {
            id: 1,
            title: "MBA - Master of Business Administration",
            description: "A comprehensive program covering all aspects of business management with focus on leadership, strategy, and organizational management.",
            instructor: "Dr. Sarah Johnson",
            duration: "2 years",
            level: "Postgraduate",
            credits: 120,
            specialization: "General Management",
            enrolled: 145,
            rating: 4.8,
            image: "/api/placeholder/400/250"
          },
          {
            id: 2,
            title: "Strategic Human Resource Management",
            description: "Learn to align HR policies with business objectives and develop strategic workforce planning skills.",
            instructor: "Prof. Michael Chen",
            duration: "1 year",
            level: "Postgraduate",
            credits: 60,
            specialization: "Human Resources",
            enrolled: 89,
            rating: 4.6,
            image: "/api/placeholder/400/250"
          },
          {
            id: 3,
            title: "Digital Marketing & Brand Management",
            description: "Master the latest digital marketing techniques and develop comprehensive brand management strategies.",
            instructor: "Dr. Amanda Torres",
            duration: "18 months",
            level: "Postgraduate",
            credits: 90,
            specialization: "Marketing Management",
            enrolled: 112,
            rating: 4.9,
            image: "/api/placeholder/400/250"
          },
          {
            id: 4,
            title: "Financial Analysis & Investment Strategy",
            description: "Develop expertise in financial analysis, investment evaluation, and portfolio management for corporate decision-making.",
            instructor: "Prof. Robert Williams",
            duration: "1 year",
            level: "Postgraduate",
            credits: 60,
            specialization: "Financial Management",
            enrolled: 76,
            rating: 4.7,
            image: "/api/placeholder/400/250"
          },
          {
            id: 5,
            title: "BBA - Bachelor of Business Administration",
            description: "A foundational program covering business fundamentals, management principles, and practical business skills.",
            instructor: "Prof. David Miller",
            duration: "3 years",
            level: "Undergraduate",
            credits: 180,
            specialization: "General Management",
            enrolled: 210,
            rating: 4.5,
            image: "/api/placeholder/400/250"
          },
          {
            id: 6,
            title: "Supply Chain & Logistics Management",
            description: "Learn to optimize supply chain operations, inventory management, and logistics for global businesses.",
            instructor: "Dr. Elena Rodriguez",
            duration: "1 year",
            level: "Postgraduate",
            credits: 60,
            specialization: "Supply Chain Management",
            enrolled: 68,
            rating: 4.6,
            image: "/api/placeholder/400/250"
          },
          {
            id: 7,
            title: "Project Management Professional",
            description: "Master project planning, execution, and control using industry-standard methodologies and tools.",
            instructor: "Prof. James Wilson",
            duration: "6 months",
            level: "Certificate",
            credits: 30,
            specialization: "Project Management",
            enrolled: 124,
            rating: 4.8,
            image: "/api/placeholder/400/250"
          },
          {
            id: 8,
            title: "International Business & Trade",
            description: "Understand global business environments, international trade policies, and cross-cultural management strategies.",
            instructor: "Dr. Carlos Mendez",
            duration: "18 months",
            level: "Postgraduate",
            credits: 90,
            specialization: "International Business",
            enrolled: 92,
            rating: 4.7,
            image: "/api/placeholder/400/250"
          },
          {
            id: 9,
            title: "Operations & Business Process Management",
            description: "Learn to optimize business processes, manage operations, and implement continuous improvement methodologies.",
            instructor: "Prof. Michelle Lee",
            duration: "1 year",
            level: "Postgraduate",
            credits: 60,
            specialization: "Operations Management",
            enrolled: 71,
            rating: 4.5,
            image: "/api/placeholder/400/250"
          }
        ];
        
        setCourses(sampleCourses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching management courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on search and filter options
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = filterOptions.level === 'all' || course.level === filterOptions.level;
    const matchesSpecialization = filterOptions.specialization === 'all' || 
                                 course.specialization === filterOptions.specialization;
    
    let matchesDuration = true;
    if (filterOptions.duration !== 'all') {
      if (filterOptions.duration === 'short' && !course.duration.includes('6 months')) {
        matchesDuration = false;
      } else if (filterOptions.duration === 'medium' && !course.duration.includes('1 year')) {
        matchesDuration = false;
      } else if (filterOptions.duration === 'long' && 
                (!course.duration.includes('2 years') && !course.duration.includes('3 years') && !course.duration.includes('18 months'))) {
        matchesDuration = false;
      }
    }
    
    return matchesSearch && matchesLevel && matchesSpecialization && matchesDuration;
  });

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Management Degree Courses</h1>
        <p className="text-gray-600 mt-2">Discover our comprehensive range of management courses designed to prepare you for leadership positions</p>
      </div>
      
      {/* Search and Filter Section */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg shadow-sm">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses, instructors, or keywords..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
        
        <div className="mt-4">
          <button 
            className="flex items-center text-blue-600 font-medium"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} className="mr-1" />
            <span>Filters</span>
            {showFilters ? <ChevronUp size={18} className="ml-1" /> : <ChevronDown size={18} className="ml-1" />}
          </button>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                <select 
                  className="w-full p-2 rounded-md border border-gray-300"
                  value={filterOptions.level}
                  onChange={(e) => setFilterOptions({...filterOptions, level: e.target.value})}
                >
                  <option value="all">All Levels</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Certificate">Certificate</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                <select 
                  className="w-full p-2 rounded-md border border-gray-300"
                  value={filterOptions.specialization}
                  onChange={(e) => setFilterOptions({...filterOptions, specialization: e.target.value})}
                >
                  <option value="all">All Specializations</option>
                  {specializations.map((spec, index) => (
                    <option key={index} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select 
                  className="w-full p-2 rounded-md border border-gray-300"
                  value={filterOptions.duration}
                  onChange={(e) => setFilterOptions({...filterOptions, duration: e.target.value})}
                >
                  <option value="all">All Durations</option>
                  <option value="short">Short (6 months)</option>
                  <option value="medium">Medium (1 year)</option>
                  <option value="long">Long (18+ months)</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    course.level === 'Undergraduate' ? 'bg-green-100 text-green-800' :
                    course.level === 'Postgraduate' ? 'bg-blue-100 text-blue-800' : 
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {course.level}
                  </span>
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                    {course.specialization}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h2>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{course.description}</p>
                
                <div className="mb-4">
                  {renderRating(course.rating)}
                </div>
                
                <div className="flex flex-col space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-gray-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Book size={16} className="mr-2 text-gray-400" />
                    <span>{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-gray-400" />
                    <span>{course.enrolled} Students Enrolled</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium flex items-center">
                    <Award size={16} className="mr-1 text-gray-500" />
                    {course.instructor}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <div className="text-gray-500 mb-2">No courses found matching your criteria</div>
            <button 
              className="text-blue-600 font-medium"
              onClick={() => {
                setSearchTerm('');
                setFilterOptions({level: 'all', specialization: 'all', duration: 'all'});
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      
      {/* Course Statistics */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-blue-800">Total Programs</h3>
          <p className="text-3xl font-bold text-blue-600">{courses.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-green-800">Specializations</h3>
          <p className="text-3xl font-bold text-green-600">{specializations.length}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-purple-800">Faculty Experts</h3>
          <p className="text-3xl font-bold text-purple-600">{new Set(courses.map(course => course.instructor)).size}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-yellow-800">Students Enrolled</h3>
          <p className="text-3xl font-bold text-yellow-600">{courses.reduce((sum, course) => sum + course.enrolled, 0)}</p>
        </div>
      </div>
    </div>
  );
};

export default ManagementCourses;