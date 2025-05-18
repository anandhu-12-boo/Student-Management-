import React, { useState } from 'react';
import { Search, Filter, Award, BookOpen, Star, User, Mail, Phone, MapPin, Clock } from 'lucide-react';

const TeacherInfo = () => {
  // Comprehensive faculty data with 12 professors
  const professors = [
    {
      id: 1,
      name: "Dr. Eleanor Wright",
      title: "Professor",
      subject: "Theoretical Physics",
      department: "Physics",
      email: "e.wright@university.edu",
      phone: "(555) 123-4567",
      office: "Science Building, Room 305",
      officeHours: "Mon/Wed 2:00-4:00 PM",
      credentials: "Ph.D. in Physics, MIT",
      research: "Quantum Field Theory",
      rating: 4.8,
      photoColor: "bg-indigo-500"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Associate Professor",
      subject: "Organic Chemistry",
      department: "Chemistry",
      email: "m.chen@university.edu",
      phone: "(555) 234-5678",
      office: "Chemistry Building, Room 210",
      officeHours: "Tue/Thu 10:00 AM-12:00 PM",
      credentials: "Ph.D. in Chemistry, Caltech",
      research: "Catalytic Reactions",
      rating: 4.6,
      photoColor: "bg-emerald-500"
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      title: "Professor",
      subject: "Modern Literature",
      department: "English",
      email: "s.johnson@university.edu",
      phone: "(555) 345-6789",
      office: "Humanities Building, Room 405",
      officeHours: "Wed/Fri 1:00-3:00 PM",
      credentials: "Ph.D. in English Literature, Oxford",
      research: "Postcolonial Literature",
      rating: 4.9,
      photoColor: "bg-purple-500"
    },
    {
      id: 4,
      name: "Dr. Robert Martinez",
      title: "Associate Professor",
      subject: "Microeconomics",
      department: "Economics",
      email: "r.martinez@university.edu",
      phone: "(555) 456-7890",
      office: "Business Building, Room 118",
      officeHours: "Mon/Fri 9:00-11:00 AM",
      credentials: "Ph.D. in Economics, Harvard",
      research: "Market Behavior Analysis",
      rating: 4.5,
      photoColor: "bg-amber-500"
    },
    {
      id: 5,
      name: "Prof. Jennifer Lee",
      title: "Professor",
      subject: "Computer Science",
      department: "Computer Science",
      email: "j.lee@university.edu",
      phone: "(555) 567-8901",
      office: "Technology Center, Room 220",
      officeHours: "Tue/Thu 3:00-5:00 PM",
      credentials: "Ph.D. in Computer Science, Stanford",
      research: "Machine Learning Algorithms",
      rating: 4.7,
      photoColor: "bg-blue-500"
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      title: "Professor",
      subject: "World History",
      department: "History",
      email: "j.wilson@university.edu",
      phone: "(555) 678-9012",
      office: "Humanities Building, Room 228",
      officeHours: "Mon/Wed 11:00 AM-1:00 PM",
      credentials: "Ph.D. in History, Yale",
      research: "Ancient Civilizations",
      rating: 4.8,
      photoColor: "bg-red-500"
    },
    {
      id: 7,
      name: "Dr. Sophia Patel",
      title: "Assistant Professor",
      subject: "Statistics",
      department: "Mathematics",
      email: "s.patel@university.edu",
      phone: "(555) 789-0123",
      office: "Math Building, Room 115",
      officeHours: "Tue/Thu 1:00-3:00 PM",
      credentials: "Ph.D. in Statistics, Princeton",
      research: "Bayesian Analysis",
      rating: 4.4,
      photoColor: "bg-teal-500"
    },
    {
      id: 8,
      name: "Prof. David Thompson",
      title: "Professor",
      subject: "Cell Biology",
      department: "Biology",
      email: "d.thompson@university.edu",
      phone: "(555) 890-1234",
      office: "Life Sciences Building, Room 302",
      officeHours: "Wed/Fri 10:00 AM-12:00 PM",
      credentials: "Ph.D. in Biology, Johns Hopkins",
      research: "Stem Cell Research",
      rating: 4.6,
      photoColor: "bg-green-500"
    },
    {
      id: 9,
      name: "Dr. Maria Rodriguez",
      title: "Associate Professor",
      subject: "Constitutional Law",
      department: "Law",
      email: "m.rodriguez@university.edu",
      phone: "(555) 901-2345",
      office: "Law Building, Room 415",
      officeHours: "Mon/Fri 2:00-4:00 PM",
      credentials: "J.D., Columbia Law School",
      research: "Civil Rights Legislation",
      rating: 4.9,
      photoColor: "bg-yellow-500"
    },
    {
      id: 10,
      name: "Prof. Thomas Baker",
      title: "Professor",
      subject: "Artificial Intelligence",
      department: "Computer Science",
      email: "t.baker@university.edu",
      phone: "(555) 012-3456",
      office: "Technology Center, Room 308",
      officeHours: "Tue/Thu 9:00-11:00 AM",
      credentials: "Ph.D. in Computer Science, UC Berkeley",
      research: "Neural Networks",
      rating: 4.7,
      photoColor: "bg-cyan-500"
    },
    {
      id: 11,
      name: "Dr. Emily White",
      title: "Assistant Professor",
      subject: "Astrophysics",
      department: "Physics",
      email: "e.white@university.edu",
      phone: "(555) 123-4567",
      office: "Science Building, Room 410",
      officeHours: "Wed/Fri 3:00-5:00 PM",
      credentials: "Ph.D. in Astrophysics, Cambridge",
      research: "Dark Matter Studies",
      rating: 4.5,
      photoColor: "bg-pink-500"
    },
    {
      id: 12,
      name: "Prof. Daniel Kim",
      title: "Professor",
      subject: "Developmental Psychology",
      department: "Psychology",
      email: "d.kim@university.edu",
      phone: "(555) 234-5678",
      office: "Behavioral Sciences Building, Room 215",
      officeHours: "Mon/Wed 10:00 AM-12:00 PM",
      credentials: "Ph.D. in Psychology, University of Chicago",
      research: "Childhood Development",
      rating: 4.8,
      photoColor: "bg-orange-500"
    }
  ];

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [expandedProfessor, setExpandedProfessor] = useState(null);
  
  // Get unique departments for filter
  const departments = ['All', ...new Set(professors.map(prof => prof.department))];
  
  // Filter professors based on search and department
  const filteredProfessors = professors.filter(prof => {
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prof.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || prof.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  // Toggle professor details
  const toggleProfessorDetails = (id) => {
    if (expandedProfessor === id) {
      setExpandedProfessor(null);
    } else {
      setExpandedProfessor(id);
    }
  };

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" size={16} />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="fill-yellow-400 text-yellow-400 opacity-50" size={16} />);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300" size={16} />);
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Faculty Directory</h1>
          <p className="text-xl opacity-80">Meet our distinguished professors and academic staff</p>
        </div>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="container mx-auto px-4 py-6 -mt-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or subject..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                className="pl-10 pr-8 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <User className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Faculty</p>
              <p className="text-2xl font-bold">{professors.length}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <BookOpen className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Departments</p>
              <p className="text-2xl font-bold">{departments.length - 1}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Avg. Rating</p>
              <p className="text-2xl font-bold">4.7</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Faculty Cards */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Faculty Members</h2>
        
        {filteredProfessors.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-lg text-gray-500">No professors match your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessors.map((professor) => (
              <div 
                key={professor.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 border-b">
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-full ${professor.photoColor} flex items-center justify-center text-white text-xl font-bold mr-4`}>
                      {professor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{professor.name}</h3>
                      <p className="text-gray-600">{professor.title}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-medium text-gray-800">{professor.subject}</p>
                    <p className="text-gray-500 text-sm">{professor.department} Department</p>
                    <div className="flex items-center mt-2">
                      <div className="flex mr-2">
                        {renderRating(professor.rating)}
                      </div>
                      <p className="text-sm text-gray-500">{professor.rating.toFixed(1)}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleProfessorDetails(professor.id)}
                    className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-md font-medium hover:bg-blue-100 transition-colors"
                  >
                    {expandedProfessor === professor.id ? "Show Less" : "Show More"}
                  </button>
                </div>
                
                {expandedProfessor === professor.id && (
                  <div className="p-6 bg-gray-50">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-start">
                        <Mail className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-gray-800">{professor.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-800">{professor.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="text-sm text-gray-500">Office</p>
                          <p className="text-gray-800">{professor.office}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="text-sm text-gray-500">Office Hours</p>
                          <p className="text-gray-800">{professor.officeHours}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="text-sm text-gray-500">Credentials</p>
                          <p className="text-gray-800">{professor.credentials}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BookOpen className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="text-sm text-gray-500">Research Focus</p>
                          <p className="text-gray-800">{professor.research}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherInfo;