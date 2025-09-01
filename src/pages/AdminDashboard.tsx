import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  X
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
        certificateVerified: false,
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
        paymentStatus: 'verified',
        phonepeTransactionId: 'PP5566778899',
        phonepeVerified: true,
        certificateVerified: false,
        amount: 8000,
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

  const openMobileDetails = (enrollment: EnrollmentData) => {
    setSelectedEnrollment(enrollment);
    setIsMobileDetailsOpen(true);
  };

  const stats = {
    total: enrollments.length,
    verified: enrollments.filter(e => e.paymentStatus === 'verified').length,
    pending: enrollments.filter(e => e.paymentStatus === 'pending').length,
    revenue: enrollments.filter(e => e.paymentStatus === 'verified').reduce((sum, e) => sum + e.amount, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg border-b-4 border-orange-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage student enrollments and verifications</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
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

        {/* Controls */}
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
                  className="pl-10 pr-4 py-3 w-full sm:w-64 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="pl-10 pr-8 py-3 w-full sm:w-auto border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white transition-all duration-200"
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

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Student Details</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Course & Institution</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Payment Info</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Verification Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredEnrollments.map((enrollment, index) => (
                  <tr key={enrollment.id} className={`hover:bg-orange-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-gray-900">{enrollment.fullName}</div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <Mail className="w-3 h-3" />
                          <span>{enrollment.emailAddress}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <Phone className="w-3 h-3" />
                          <span>{enrollment.whatsappNumber}</span>
                        </div>
                        {enrollment.referralCode && (
                          <div className="flex items-center space-x-1 text-xs text-orange-600">
                            <Gift className="w-3 h-3" />
                            <span>Ref: {enrollment.referralCode}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-gray-900">{enrollment.course}</div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <GraduationCap className="w-3 h-3" />
                          <span>{enrollment.collegeInstitution}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-gray-900">₹{enrollment.amount.toLocaleString()}</div>
                        <div className="flex items-center space-x-1">
                          <Smartphone className="w-4 h-4 text-purple-600" />
                          <span className="text-sm text-gray-600">{enrollment.paymentMethod}</span>
                        </div>
                        {enrollment.phonepeTransactionId && (
                          <div className="text-xs text-gray-500 font-mono">
                            ID: {enrollment.phonepeTransactionId}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                            enrollment.paymentStatus === 'verified' 
                              ? 'bg-green-100 text-green-800'
                              : enrollment.paymentStatus === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {enrollment.paymentStatus}
                          </span>
                          <button
                            onClick={() => updateVerificationStatus(enrollment.id, 'paymentStatus', 
                              enrollment.paymentStatus === 'verified' ? 'pending' : 'verified')}
                            className={`p-1 rounded-full hover:bg-gray-100 transition-colors ${
                              enrollment.paymentStatus === 'verified'
                                ? 'text-green-600'
                                : 'text-gray-400'
                            }`}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-600">PhonePe:</span>
                          <button
                            onClick={() => updateVerificationStatus(enrollment.id, 'phonepeVerified', !enrollment.phonepeVerified)}
                            className={`p-1 rounded-full hover:bg-gray-100 transition-colors ${
                              enrollment.phonepeVerified
                                ? 'text-green-600'
                                : 'text-red-500'
                            }`}
                          >
                            {enrollment.phonepeVerified ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-600">Certificate:</span>
                          <button
                            onClick={() => updateVerificationStatus(enrollment.id, 'certificateVerified', !enrollment.certificateVerified)}
                            className={`p-1 rounded-full hover:bg-gray-100 transition-colors ${
                              enrollment.certificateVerified
                                ? 'text-green-600'
                                : 'text-red-500'
                            }`}
                          >
                            {enrollment.certificateVerified ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:hidden space-y-4"
        >
          {filteredEnrollments.map((enrollment) => (
            <div key={enrollment.id} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{enrollment.fullName}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
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
                  </div>
                </div>
                <button
                  onClick={() => openMobileDetails(enrollment)}
                  className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    enrollment.paymentStatus === 'verified' 
                      ? 'bg-green-100 text-green-800'
                      : enrollment.paymentStatus === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {enrollment.paymentStatus}
                  </span>
                  <span className="text-lg font-bold text-gray-900">₹{enrollment.amount.toLocaleString()}</span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => updateVerificationStatus(enrollment.id, 'phonepeVerified', !enrollment.phonepeVerified)}
                    className={`p-2 rounded-full transition-colors ${
                      enrollment.phonepeVerified
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {enrollment.phonepeVerified ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => updateVerificationStatus(enrollment.id, 'certificateVerified', !enrollment.certificateVerified)}
                    className={`p-2 rounded-full transition-colors ${
                      enrollment.certificateVerified
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {enrollment.certificateVerified ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile Details Modal */}
        {selectedEnrollment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden ${isMobileDetailsOpen ? 'block' : 'hidden'}`}
          >
            <div className="flex items-end justify-center min-h-screen">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                className="bg-white rounded-t-2xl p-6 w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Student Details</h2>
                  <button
                    onClick={() => setIsMobileDetailsOpen(false)}
                    className="p-2 bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Full Name:</strong> {selectedEnrollment.fullName}</div>
                      <div><strong>Email:</strong> {selectedEnrollment.emailAddress}</div>
                      <div><strong>WhatsApp:</strong> {selectedEnrollment.whatsappNumber}</div>
                      <div><strong>Institution:</strong> {selectedEnrollment.collegeInstitution}</div>
                      {selectedEnrollment.referralCode && (
                        <div><strong>Referral Code:</strong> {selectedEnrollment.referralCode}</div>
                      )}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Course & Payment</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Course:</strong> {selectedEnrollment.course}</div>
                      <div><strong>Amount:</strong> ₹{selectedEnrollment.amount.toLocaleString()}</div>
                      <div><strong>Payment Method:</strong> {selectedEnrollment.paymentMethod}</div>
                      <div><strong>Transaction ID:</strong> {selectedEnrollment.phonepeTransactionId}</div>
                      <div><strong>Enrollment Date:</strong> {new Date(selectedEnrollment.enrollmentDate).toLocaleDateString()}</div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Verification Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Payment Status</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          selectedEnrollment.paymentStatus === 'verified' 
                            ? 'bg-green-200 text-green-800'
                            : 'bg-yellow-200 text-yellow-800'
                        }`}>
                          {selectedEnrollment.paymentStatus}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>PhonePe Verified</span>
                        {selectedEnrollment.phonepeVerified ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Certificate Verified</span>
                        {selectedEnrollment.certificateVerified ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

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
  );
};

export default AdminDashboard;
