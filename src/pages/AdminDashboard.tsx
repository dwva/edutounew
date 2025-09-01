import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  DollarSign, 
  CreditCard,
  LogOut,
  Search,
  Filter,
  Download,
  Eye,
  Phone,
  Mail,
  GraduationCap,
  Gift,
  Smartphone,
  Menu,
  X,
  Clock,
  ShieldCheck,
  Award,
  AlertCircle
} from 'lucide-react';

interface EnrollmentData {
  id: string;
  fullName: string;
  emailAddress: string;
  whatsappNumber: string;
  collegeInstitution: string;
  referralCode?: string;
  course: string;
  enrollmentDate: string;
  paymentStatus: 'pending' | 'verified' | 'failed';
  phonepeTransactionId?: string;
  phonepeVerified: boolean;
  certificateVerified: boolean;
  amount: number;
  paymentMethod: 'PhonePe' | 'UPI' | 'Card';
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState<EnrollmentData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'verified' | 'pending' | 'failed'>('all');
  const [selectedEnrollment, setSelectedEnrollment] = useState<EnrollmentData | null>(null);
  const [isMobileDetailsOpen, setIsMobileDetailsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'verified' | 'pending'>('verified');

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }

    // Load mock enrollment data with new structure
    const mockData: EnrollmentData[] = [
      {
        id: '1',
        fullName: 'Rahul Kumar Singh',
        emailAddress: 'rahul.kumar@gmail.com',
        whatsappNumber: '+91 9876543210',
        collegeInstitution: 'IIT Delhi',
        referralCode: 'REF001',
        course: 'Full Stack Development',
        enrollmentDate: '2024-01-15',
        paymentStatus: 'verified',
        phonepeTransactionId: 'PP1234567890',
        phonepeVerified: true,
        certificateVerified: true,
        amount: 15000,
        paymentMethod: 'PhonePe'
      },
      {
        id: '2',
        fullName: 'Priya Sharma',
        emailAddress: 'priya.sharma@yahoo.com',
        whatsappNumber: '+91 8765432109',
        collegeInstitution: 'Delhi University',
        course: 'React Advanced Course',
        enrollmentDate: '2024-01-14',
        paymentStatus: 'pending',
        phonepeTransactionId: 'PP0987654321',
        phonepeVerified: false,
        certificateVerified: false,
        amount: 12000,
        paymentMethod: 'PhonePe'
      },
      {
        id: '3',
        fullName: 'Amit Patel',
        emailAddress: 'amit.patel@outlook.com',
        whatsappNumber: '+91 7654321098',
        collegeInstitution: 'Mumbai University',
        referralCode: 'REF002',
        course: 'Data Science & AI',
        enrollmentDate: '2024-01-13',
        paymentStatus: 'verified',
        phonepeTransactionId: 'PP1122334455',
        phonepeVerified: true,
        certificateVerified: true,
        amount: 18000,
        paymentMethod: 'PhonePe'
      },
      {
        id: '4',
        fullName: 'Sneha Reddy',
        emailAddress: 'sneha.reddy@gmail.com',
        whatsappNumber: '+91 9988776655',
        collegeInstitution: 'Hyderabad Institute of Technology',
        course: 'Digital Marketing',
        enrollmentDate: '2024-01-12',
        paymentStatus: 'pending',
        phonepeTransactionId: 'PP5566778899',
        phonepeVerified: false,
        certificateVerified: false,
        amount: 8000,
        paymentMethod: 'PhonePe'
      },
      {
        id: '5',
        fullName: 'Vikram Singh',
        emailAddress: 'vikram.singh@gmail.com',
        whatsappNumber: '+91 8877665544',
        collegeInstitution: 'Pune Institute of Technology',
        referralCode: 'REF003',
        course: 'Mobile App Development',
        enrollmentDate: '2024-01-11',
        paymentStatus: 'verified',
        phonepeTransactionId: 'PP9988776655',
        phonepeVerified: true,
        certificateVerified: false,
        amount: 14000,
        paymentMethod: 'PhonePe'
      }
    ];

    setEnrollments(mockData);
    setFilteredEnrollments(mockData);
  }, [navigate]);

  useEffect(() => {
    let filtered = enrollments.filter(enrollment =>
      enrollment.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrollment.collegeInstitution.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterStatus !== 'all') {
      filtered = filtered.filter(enrollment => enrollment.paymentStatus === filterStatus);
    }

    setFilteredEnrollments(filtered);
  }, [searchTerm, filterStatus, enrollments]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin');
  };

  const updateVerificationStatus = (id: string, field: 'phonepeVerified' | 'certificateVerified' | 'paymentStatus', value: any) => {
    setEnrollments(prev => prev.map(enrollment =>
      enrollment.id === id ? { ...enrollment, [field]: value } : enrollment
    ));
  };

  const getNextStatus = (currentStatus: 'pending' | 'verified' | 'failed'): 'pending' | 'verified' | 'failed' => {
    switch (currentStatus) {
      case 'pending': return 'verified';
      case 'verified': return 'failed';
      case 'failed': return 'pending';
      default: return 'pending';
    }
  };

  const getNextPhonepeStatus = (current: boolean): boolean => !current;
  const getNextCertificateStatus = (current: boolean): boolean => !current;

  const verifiedStudents = enrollments.filter(e => e.paymentStatus === 'verified');
  const pendingStudents = enrollments.filter(e => e.paymentStatus === 'pending');

  const stats = {
    total: enrollments.length,
    verified: verifiedStudents.length,
    pending: pendingStudents.length,
    revenue: verifiedStudents.reduce((sum, e) => sum + e.amount, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg border-b-4 border-orange-500 relative z-10"
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 text-sm">Manage student enrollments and verifications</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">Logout</span>
            </button>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || window.innerWidth >= 1024) && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto w-80 bg-white shadow-2xl lg:shadow-xl border-r border-gray-200 overflow-y-auto"
              style={{ top: window.innerWidth >= 1024 ? '120px' : '0', height: window.innerWidth >= 1024 ? 'calc(100vh - 120px)' : '100vh' }}
            >
              {/* Sidebar Header */}
              <div className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Quick Access</h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden p-1 hover:bg-orange-400 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('verified')}
                  className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                    activeTab === 'verified'
                      ? 'bg-green-50 text-green-700 border-b-2 border-green-500'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verified ({verifiedStudents.length})</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                    activeTab === 'pending'
                      ? 'bg-yellow-50 text-yellow-700 border-b-2 border-yellow-500'
                      : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Pending ({pendingStudents.length})</span>
                  </div>
                </button>
              </div>

              {/* Verified Students List */}
              {activeTab === 'verified' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 space-y-3"
                >
                  {verifiedStudents.map((student) => (
                    <motion.div
                      key={student.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{student.fullName}</h3>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-1 text-xs text-gray-600">
                              <CreditCard className="w-3 h-3" />
                              <span>{student.phonepeTransactionId}</span>
                            </div>
                            <div className="text-xs text-green-700 font-medium">₹{student.amount.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          {/* PhonePe Verification Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateVerificationStatus(student.id, 'phonepeVerified', getNextPhonepeStatus(student.phonepeVerified))}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-md border-2 ${
                              student.phonepeVerified
                                ? 'bg-green-500 text-white border-green-600 hover:bg-green-600 hover:border-green-700'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                            }`}
                          >
                            PhonePe: Verified
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateVerificationStatus(student.id, 'certificateVerified', getNextCertificateStatus(student.certificateVerified))}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-md border-2 ${
                              student.certificateVerified
                                ? 'bg-blue-500 text-white border-blue-600 hover:bg-blue-600 hover:border-blue-700'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                            }`}
                          >
                            Certificate: Verified
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {verifiedStudents.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <CheckCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p className="text-sm">No verified students yet</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Pending Students List */}
              {activeTab === 'pending' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 space-y-3"
                >
                  {pendingStudents.map((student) => (
                    <motion.div
                      key={student.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{student.fullName}</h3>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-1 text-xs text-gray-600">
                              <CreditCard className="w-3 h-3" />
                              <span>{student.phonepeTransactionId || 'No ID'}</span>
                            </div>
                            <div className="text-xs text-yellow-700 font-medium">₹{student.amount.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          {/* Payment Verification Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateVerificationStatus(student.id, 'paymentStatus', getNextStatus(student.paymentStatus))}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-md border-2 ${
                              student.paymentStatus === 'verified'
                                ? 'bg-green-500 text-white border-green-600 hover:bg-green-600 hover:border-green-700'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                            }`}
                          >
                            Payment: Verified
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateVerificationStatus(student.id, 'phonepeVerified', getNextPhonepeStatus(student.phonepeVerified))}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-md border-2 ${
                              student.phonepeVerified
                                ? 'bg-green-500 text-white border-green-600 hover:bg-green-600 hover:border-green-700'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                            }`}
                          >
                            PhonePe: Verified
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {pendingStudents.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Clock className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p className="text-sm">No pending students</p>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen && window.innerWidth >= 1024 ? 'ml-0' : 'ml-0'}`}>
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Total Students</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stats.total}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border-l-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Verified</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stats.verified}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border-l-4 border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Pending</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stats.pending}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300 col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Total Revenue</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">₹{stats.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Search Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-3 w-full sm:w-64 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-orange-300 hover:shadow-md"
                    />
                  </div>
                  
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value as any)}
                      className="pl-10 pr-8 py-3 w-full sm:w-auto border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white transition-all duration-200 hover:border-orange-300 hover:shadow-md"
                    >
                      <option value="all">All Status</option>
                      <option value="verified">Verified</option>
                      <option value="pending">Pending</option>
                      <option value="failed">Failed</option>
                    </select>
                  </div>
                </div>
                
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Export Data</span>
                </button>
              </div>
            </motion.div>

            {/* Student Cards - Mobile and Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid gap-6"
            >
              {filteredEnrollments.map((enrollment) => (
                <motion.div
                  key={enrollment.id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* Student Info */}
                    <div className="flex-1 lg:flex lg:space-x-8">
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">{enrollment.fullName}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>{enrollment.emailAddress}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>{enrollment.whatsappNumber}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="w-4 h-4 text-gray-400" />
                            <span>{enrollment.collegeInstitution}</span>
                          </div>
                          {enrollment.referralCode && (
                            <div className="flex items-center space-x-2">
                              <Gift className="w-4 h-4 text-orange-500" />
                              <span className="text-orange-600 font-medium">{enrollment.referralCode}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="lg:w-64 space-y-2">
                        <div className="text-lg font-bold text-gray-900">{enrollment.course}</div>
                        <div className="flex items-center space-x-2">
                          <Smartphone className="w-4 h-4 text-purple-600" />
                          <span className="text-sm text-gray-600">{enrollment.paymentMethod}</span>
                          <span className="text-lg font-bold text-green-600">₹{enrollment.amount.toLocaleString()}</span>
                        </div>
                        {enrollment.phonepeTransactionId && (
                          <div className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                            {enrollment.phonepeTransactionId}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Verification Controls */}
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <div className="flex flex-col space-y-3 lg:space-y-2">
                        {/* Verification Status Buttons */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateVerificationStatus(enrollment.id, 'paymentStatus', getNextStatus(enrollment.paymentStatus))}
                          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg border-2 ${
                            enrollment.paymentStatus === 'verified'
                              ? 'bg-green-500 text-white border-green-600 hover:bg-green-600 hover:border-green-700'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                          }`}
                        >
                          Verification Status: Verified
                        </motion.button>

                        {/* PhonePe Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateVerificationStatus(enrollment.id, 'phonepeVerified', getNextPhonepeStatus(enrollment.phonepeVerified))}
                          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg border-2 ${
                            enrollment.phonepeVerified
                              ? 'bg-green-500 text-white border-green-600 hover:bg-green-600 hover:border-green-700'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                          }`}
                        >
                          PhonePe: Verified
                        </motion.button>
                        
                        {/* Certificate Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => updateVerificationStatus(enrollment.id, 'certificateVerified', getNextCertificateStatus(enrollment.certificateVerified))}
                          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg border-2 ${
                            enrollment.certificateVerified
                              ? 'bg-blue-500 text-white border-blue-600 hover:bg-blue-600 hover:border-blue-700'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                          }`}
                        >
                          Certificate: Verified
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredEnrollments.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-2xl shadow-xl"
              >
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Students Found</h3>
                <p className="text-gray-500">No enrollments found matching your search criteria.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && window.innerWidth < 1024 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
