import React, { useState } from 'react';
import { Search, Award, CheckCircle, XCircle } from 'lucide-react';

// Student data structure
interface Student {
  id: string;
  name: string;
  course?: string;
}

// Sample data from your list
const studentData = [
    { id: 'EDUFSF0101001', name: 'Rojaveni' },
    { id: 'EDUFSF0101002', name: 'K.Priyadharshini' },
    { id: 'EDUFSF0101222', name: 'A Gibbson Arputhara'},
    { id: 'EDUFSF0101223', name: 'Dinesh Kumar V'},
    { id: 'EDUFSF0101003', name: 'Santhanalakshmi' },
    { id: 'EDUFSF0101004', name: 'Santhosh' },
    { id: 'EDUFSF0101005', name: 'S.Bramhani' },
    { id: 'EDUFSF0101006', name: 'G.vinay kumar reddy' },
    { id: 'EDUFSF0101007', name: 'Pathan Arfad khan' },
    { id: 'EDUFSF0101008', name: 'THARUN V' },
    { id: 'EDUFSF0101009', name: 'Sahasra V' },
    { id: 'EDUFSF0101010', name: 'Raj Kumar' },
    { id: 'EDUFSF0101011', name: 'Navyasree.k' },
    { id: 'EDUFSF0101012', name: 'Raghini' },
    { id: 'EDUFSF0101013', name: 'Sanjana L' },
    { id: 'EDUFSF0101221', name: 'Poornima S' },
    { id: 'EDUFSF0101014', name: 'RO MU Jauhar' },
    { id: 'EDUFSF0101219', name: 'R. Rachitha' },
    { id: 'EDUFSF0101015', name: 'Thamizhamudhu G' },
    { id: 'EDUFSF0101016', name: 'Gayathri' },
    { id: 'EDUFSF0101017', name: 'Christina Joy' },
    { id: 'EDUFSF0101018', name: 'Dr.F.Mary Anjalin' },
    { id: 'EDUFSF0101019', name: 'ANDRALYN HAZEL TRINITA' },
    { id: 'EDUFSF0101020', name: 'N.Kishan kumar' },
    { id: 'EDUFSF0101021', name: 'ADITYA KRISHNAN S' },
    { id: 'EDUFSF0101022', name: 'Syed abuzar' },
    { id: 'EDUFSF0101023', name: 'Keishore.S' },
    { id: 'EDUFSF0101024', name: 'A Siva Karthik Reddy' },
    { id: 'EDUFSF0101025', name: 'k.punitha' },
    { id: 'EDUFSF0101026', name: 'Lakshya Saini' },
    { id: 'EDUFSF0101027', name: 'Nisha K' },
    { id: 'EDUFSF0101028', name: 'Monish Kumar. S' },
    { id: 'EDUFSF0101029', name: 'Swetha S' },
    { id: 'EDUFSF0101030', name: 'KOTLA MUSKAN' },
    { id: 'EDUFSF0101031', name: 'Hari prasath' },
    { id: 'EDUFSF0101032', name: 'S.varunkrishna' },
    { id: 'EDUFSF0101033', name: 'S.P.Sachin' },
    { id: 'EDUFSF0101034', name: 'K.Ashwanth' },
    { id: 'EDUFSF0101035', name: 'P.Tamilarasan' },
    { id: 'EDUFSF0101036', name: 'SHAIK ASHA' },
    { id: 'EDUFSF0101037', name: 'Aswin M' },
    { id: 'EDUFSF0101038', name: 'Kamalanathan' },
    { id: 'EDUFSF0101039', name: 'S Dinesh' },
    { id: 'EDUFSF0101040', name: 'Vishwa. S' },
    { id: 'EDUFSF0101041', name: 'Mugilan.J' },
    { id: 'EDUFSF0101042', name: 'Santhosh A S' },
    { id: 'EDUFSF0101043', name: 'vignesh' },
    { id: 'EDUFSF0101044', name: 'P. Moksha pradha' },
    { id: 'EDUFSF0101045', name: 'R.tharun' },
    { id: 'EDUFSF0101046', name: 'Syed Saniya Iqbal' },
    { id: 'EDUFSF0101047', name: 'Preethika N' },
    { id: 'EDUFSF0101048', name: 'Rahul raj' },
    { id: 'EDUFSF0101049', name: 'ALAGUSUBBURAM' },
    { id: 'EDUFSF0101050', name: 'V .santhosh kumar' },
    { id: 'EDUFSF0101051', name: 'Shaik Sumiya' },
    { id: 'EDUFSF0101052', name: 'PEDDINTI RAMESH BALAJI' },
    { id: 'EDUFSF0101053', name: 'Rohith.K.S' },
    { id: 'EDUFSF0101054', name: 'Jampala sravani' },
    { id: 'EDUFSF0101055', name: 'V M Sai Bhargav' },
    { id: 'EDUFSF0101056', name: 'Visakan T' },
    { id: 'EDUFSF0101057', name: 'Harissh M' },
    { id: 'EDUFSF0101058', name: 'ETM JASWANTH' },
    { id: 'EDUFSF0101059', name: 'Kaveeshwar' },
    { id: 'EDUFSF0101060', name: 'Guruprasath A' },
    { id: 'EDUFSF0101061', name: 'TP NAYANA' },
    { id: 'EDUFSF0101062', name: 'Yashikasri.c' },
    { id: 'EDUFSF0101063', name: 'G.Sai Sudhabdi' },
    { id: 'EDUFSF0101064', name: 'M.Triveni' },
    { id: 'EDUFSF0101065', name: 'YANDURU SAI CHETAN' },
    { id: 'EDUFSF0101066', name: 'M Srusty' },
    { id: 'EDUFSF0101067', name: 'K.Sandhya' },
    { id: 'EDUFSF0101068', name: 'K Praveen Kumar Reddy' },
    { id: 'EDUFSF0101069', name: 'Konakalla Naga Venkata Durga Prem' },
    { id: 'EDUFSF0101070', name: 'Vanama Dhanalakshmi' },
    { id: 'EDUFSF0101071', name: 'G.Harika devi' },
    { id: 'EDUFSF0101072', name: 'C.prasanna' },
    { id: 'EDUFSF0101073', name: 'N.Sri Nandini' },
    { id: 'EDUFSF0101074', name: 'Harini. R' },
    { id: 'EDUFSF0101075', name: 'J.s.christilla sweety' },
    { id: 'EDUFSF0101076', name: 'Shaik Jabbar Basha' },
    { id: 'EDUFSF0101077', name: 'Aksada R' },
    { id: 'EDUFSF0101078', name: 'A.Sai Rohit' },
    { id: 'EDUFSF0101079', name: 'Ganesh' },
    { id: 'EDUFSF0101080', name: 'Y.sai Prasanth varma' },
    { id: 'EDUFSF0101081', name: 'M.DHINESHKARTHIK' },
    { id: 'EDUFSF0101082', name: 'Teja M' },
    { id: 'EDUFSF0101083', name: 'Elango.M' },
    { id: 'EDUFSF0101084', name: 'Monika M' },
    { id: 'EDUFSF0101085', name: 'B Naga Jaswanth' },
    { id: 'EDUFSF0101086', name: 'Kaveti Vamsi Siva' },
    { id: 'EDUFSF0101087', name: 'TK Aathithyan' },
    { id: 'EDUFSF0101088', name: 'Jainishanth G' },
    { id: 'EDUFSF0101089', name: 'Sabarinathan J' },
    { id: 'EDUFSF0101090', name: 'PARAMESWARI.R' },
    { id: 'EDUFSF0101091', name: 'Ashok kumar s' },
    { id: 'EDUFSF0101092', name: 'Jayamurugan K' },
    { id: 'EDUFSF0101093', name: 'Shaik shairabhanu' },
    { id: 'EDUFSF0101094', name: 'Sri harshini' },
    { id: 'EDUFSF0101095', name: 'Naseema Zulfa Sirajudeen' },
    { id: 'EDUFSF0101096', name: 'Sri Arunachalam S' },
    { id: 'EDUFSF0101097', name: 'Vankara Ganga Deepika' },
    { id: 'EDUFSF0101098', name: 'Karthick D' },
    { id: 'EDUFSF0101099', name: 'Pooja S' },
    { id: 'EDUFSF0101100', name: 'Annapureddy Sravanthi' },
    { id: 'EDUFSF0101101', name: 'Bhavika Jain R' },
    { id: 'EDUFSF0101102', name: 'Shaikmohammedshafi' },
    { id: 'EDUFSF0101103', name: 'Alton Shefer S' },
    { id: 'EDUFSF0101104', name: 'Giriraj sharma' },
    { id: 'EDUFSF0101105', name: 'Sanmuga Priyan.S' },
    { id: 'EDUFSF0101106', name: 'Issac sam prakash S' },
    { id: 'EDUFSF0101107', name: 'JEET H KHAMBHOLJA' },
    { id: 'EDUFSF0101108', name: 'S Naresh Kumar' },
    { id: 'EDUFSF0101109', name: 'TK Aathithyan' },
    { id: 'EDUFSF0101110', name: 'K.MAHESH SAI' },
    { id: 'EDUFSF0101111', name: 'G SUDHARSSANAM' },
    { id: 'EDUFSF0101112', name: 'Tejas N' },
    { id: 'EDUFSF0101113', name: 'S.SAKKTHI SHRI' },
    { id: 'EDUFSF0101114', name: 'Swetha' },
    { id: 'EDUFSF0101115', name: 'Narmadha.G' },
    { id: 'EDUFSF0101116', name: 'JAFRIN SWETHA.J' },
    { id: 'EDUFSF0101117', name: 'Vedhavarshini.K' },
    { id: 'EDUFSF0101118', name: 'Tharun' },
    { id: 'EDUFSF0101119', name: 'K. Thanigaivelan' },
    { id: 'EDUFSF0101120', name: 'Tejanvesh Reddy' },
    { id: 'EDUFSF0101121', name: 'Sourav Das' },
    { id: 'EDUFSF0101122', name: 'Bodipudi Varshitha' },
    { id: 'EDUFSF0101123', name: 'Arthi Pasupuleti' },
    { id: 'EDUFSF0101124', name: 'P.Mahisreeja' },
    { id: 'EDUFSF0101125', name: 'B . Pawan kumar' },
    { id: 'EDUFSF0101126', name: 'MATHAN RAJ E' },
    { id: 'EDUFSF0101127', name: 'Chenna Nikhitha' },
    { id: 'EDUFSF0101128', name: 'N. Sai Saranya' },
    { id: 'EDUFSF0101129', name: 'P. Sri chandana' },
    { id: 'EDUFSF0101130', name: 'Gadwal Mohammad Muzammil' },
    { id: 'EDUFSF0101131', name: 'Siripireddy Sumanthreddy' },
    { id: 'EDUFSF0101132', name: 'Kolluri.Dhatri Parvathi Swetha' },
    { id: 'EDUFSF0101133', name: 'G.keerthi reddy' },
    { id: 'EDUFSF0101134', name: 'Sura.tejasree' },
    { id: 'EDUFSF0101135', name: 'G.keerthireddy' },
    { id: 'EDUFSF0101136', name: 'Manchikanthi Tejaswi' },
    { id: 'EDUFSF0101137', name: 'B. Ramakrishna nagendra' },
    { id: 'EDUFSF0101138', name: 'Mukesh Balaji M' },
    { id: 'EDUFSF0101139', name: 'Jerolin Mary R' },
    { id: 'EDUFSF0101140', name: 'YAMINI P' },
    { id: 'EDUFSF0101141', name: 'H.Ashwaq Hussain' },
    { id: 'EDUFSF0101142', name: 'Chethan Daggupati' },
    { id: 'EDUFSF0101143', name: 'Madhuvanthi S K' },
    { id: 'EDUFSF0101144', name: 'Deekshitha U' },
    { id: 'EDUFSF0101145', name: 'J Bagyalakshmi' },
    { id: 'EDUFSF0101146', name: 'Ajin R' },
    { id: 'EDUFSF0101147', name: 'Keerthi Vasan S' },
    { id: 'EDUFSF0101148', name: 'Santhosh' },
    { id: 'EDUFSF0101149', name: 'K.Harish' },
    { id: 'EDUFSF0101150', name: 'Haridev M' },
    { id: 'EDUFSF0101151', name: 'V Rahul' },
    { id: 'EDUFSF0101152', name: 'Adithya Anand' },
    { id: 'EDUFSF0101153', name: 'KANIMOZHI' },
    { id: 'EDUFSF0101154', name: 'Meena' },
    { id: 'EDUFSF0101155', name: 'R.SaiTeja' },
    { id: 'EDUFSF0101156', name: 'Saritha K' },
    { id: 'EDUFSF0101157', name: 'K.lahari reddy' },
    { id: 'EDUFSF0101158', name: 'Jahnavi maddi' },
    { id: 'EDUFSF0101159', name: 'Nameetha N' },
    { id: 'EDUFSF0101160', name: 'Jishitha Kondapalli' },
    { id: 'EDUFSF0101161', name: 'P.A.Mohameed Anas' },
    { id: 'EDUFSF0101162', name: 'R. Sandhiya' },
    { id: 'EDUFSF0101163', name: 'Durga Prasad' },
    { id: 'EDUFSF0101164', name: 'V.Vasanth' },
    { id: 'EDUFSF0101165', name: 'Mohammed Zawad Adnan V' },
    { id: 'EDUFSF0101166', name: 'krishna sai' },
    { id: 'EDUFSF0101167', name: 'S.Saravana Kannan' },
    { id: 'EDUFSF0101168', name: 'Y. Abhay' },
    { id: 'EDUFSF0101169', name: 'Mudireddy Charitha' },
    { id: 'EDUFSF0101170', name: 'Sudhireddy Deekshitha' },
    { id: 'EDUFSF0101171', name: 'Mohammed Rafi R' },
    { id: 'EDUFSF0101172', name: 'Deepshikhaa S' },
    { id: 'EDUFSF0101173', name: 'SAVITHIRI S' },
    { id: 'EDUFSF0101174', name: 'K.Sai Dinesh' },
    { id: 'EDUFSF0101175', name: 'Bewin Joel S P' },
    { id: 'EDUFSF0101176', name: 'Sarathy I' },
    { id: 'EDUFSF0101177', name: 'BURRA RISHITHA' },
    { id: 'EDUFSF0101178', name: 'Gopika.S' },
    { id: 'EDUFSF0101179', name: 'Evelin' },
    { id: 'EDUFSF0101180', name: 'Dhivya.S' },
    { id: 'EDUFSF0101181', name: 'Princy.P' },
    { id: 'EDUFSF0101182', name: 'Nevedhitha.S.R' },
    { id: 'EDUFSF0101183', name: 'Abhilash R' },
    { id: 'EDUFSF0101184', name: 'Lohith' },
    { id: 'EDUFSF0101185', name: 'Sanjeevsivam.K' },
    { id: 'EDUFSF0101186', name: 'Sedhu madhavan' },
    { id: 'EDUFSF0101187', name: 'Deveena' },
    { id: 'EDUFSF0101188', name: 'Kamalesh K' },
    { id: 'EDUFSF0101189', name: 'KARTHIKEYAN S' },
    { id: 'EDUFSF0101190', name: 'Gayathri k' },
    { id: 'EDUFSF0101191', name: 'SIDDI THULASISWAR REDDY' },
    { id: 'EDUFSF0101192', name: 'Ishaan B' },
    { id: 'EDUFSF0101193', name: 'Deepika Ravi' },
    { id: 'EDUFSF0101194', name: 'Nithish Kumar B' },
    { id: 'EDUFSF0101195', name: 'Jeevanantham v' },
    { id: 'EDUFSF0101196', name: 'M.VAISHNAVI' },
    { id: 'EDUFSF0101197', name: 'Benita Johnson J' },
    { id: 'EDUFSF0101198', name: 'Srinivasan A' },
    { id: 'EDUFSF0101199', name: 'Alan Aldrin E A' },
    { id: 'EDUFSF0101200', name: 'G Sneha Srilatha' },
    { id: 'EDUFSF0101201', name: 'SHAIK SAMEER' },
    { id: 'EDUFSF0101202', name: 'M. Sivamani' },
    { id: 'EDUFSF0101203', name: 'Rosenivitha.J' },
    { id: 'EDUFSF0101204', name: 'Sridurgakannan' },
    { id: 'EDUFSF0101205', name: 'Ajay N' },
    { id: 'EDUFSF0101206', name: 'Navya Shri A.P' },
    { id: 'EDUFSF0101207', name: 'Praveen A' },
    { id: 'EDUFSF0101208', name: 'Karani Ramakrishna' },
    { id: 'EDUFSF0101209', name: 'Akash R' },
    { id: 'EDUFSF0101210', name: 'Barani vendhan C' },
    { id: 'EDUFSF0101211', name: 'R.Roshini' },
    { id: 'EDUFSF0101212', name: 'Raghul.D' },
    { id: 'EDUFSF0101213', name: 'Janani' },
    { id: 'EDUFSF0101214', name: 'S.Lavanya' },
    { id: 'EDUFSF0101215', name: 'Vansh Mehta' },
    { id: 'EDUFSF0101216', name: 'Hariharan.g' },
    { id: 'EDUFSF0101217', name: 'S.Tharunkamalesh' },
    { id: 'EDUFSF0101232', name: 'Vasu Devan V' },
    { id: 'EDUFSF0101233', name: 'Tharun Karthiikeyan R N' },
    { id: 'EDUFSF0101218', name: 'Saktheeswaran' },
    
  ];
// Course options
const courseOptions = [
  { id: 'EDUFSF', name: 'Full Stack Foundation', fullName: 'Full Stack Foundation: 7-Day AI-Powered Web Development Workshop 🚀', duration: 'March 15th - 22nd' },
  { id: 'EDUDS', name: 'Data Science', fullName: 'Data Science Fundamentals', duration: 'April 10th - 17th' },
  { id: 'EDUAI', name: 'Artificial Intelligence', fullName: 'Artificial Intelligence Essentials', duration: 'May 5th - 12th' },
  { id: 'EDUCYB', name: 'Cyber Security', fullName: 'Cyber Security Basics', duration: 'June 1st - 8th' },
];

const VerificationPage: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [searchResult, setSearchResult] = useState<Student | null>(null);
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleVerify = () => {
    setIsSearching(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const result = studentData.find(student => student.id === certificateId);
      setSearchResult(result || null);
      setIsVerified(!!result);
      setIsSearching(false);
    }, 1000);
  };

  // Determine course details based on certificate ID prefix
  const getCourseDetails = (id: string) => {
    const prefix = id.substring(0, 6); // Extract the course prefix (e.g., EDUFSF)
    const course = courseOptions.find(c => c.id === prefix) || courseOptions[0]; // Default to first course if not found
    return course;
  };

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Certificate Verification</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Verify the authenticity of certificates issued by EDUTOU. Enter the certificate ID to check if it's valid and view student details.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-10">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-1">
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                Select Course
              </label>
              <select
                id="course"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-[var(--color-brand)]"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">All Courses</option>
                {courseOptions.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-1">
                Certificate ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="certificateId"
                  placeholder="Enter certificate ID (e.g., EDUFSF0101001)"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand)] focus:border-[var(--color-brand)] pr-12"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                />
                <button
                  onClick={handleVerify}
                  disabled={isSearching || !certificateId}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-orange-100 text-[var(--color-brand-dark)] hover:bg-orange-200 disabled:opacity-50"
                  title="Verify Certificate"
                  aria-label="Verify Certificate"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleVerify}
            disabled={isSearching || !certificateId}
            className="w-full py-2.5 px-4 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] disabled:opacity-50 transition-colors flex items-center justify-center border border-black"
          >
            {isSearching ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Verifying...
              </>
            ) : (
              <>Verify Certificate</>
            )}
          </button>
        </div>

        {isVerified !== null && (
          <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 transition-all duration-300 ${isVerified ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
            {isVerified ? (
              <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
                <div className="bg-green-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Certificate Verified!</h2>
                  <p className="text-gray-700 mb-4">This certificate is authentic and was issued by EDUTOU.</p>
                  
                  <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">Certificate Details</h3>
                    
                    {/* Student Information */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Student Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Student Name</p>
                          <p className="font-medium text-lg text-gray-900">{searchResult?.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Registration Number</p>
                          <p className="font-medium text-lg text-gray-900">{searchResult?.id}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Information */}
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Course Information</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Course</p>
                          <p className="font-medium text-lg text-gray-900">{getCourseDetails(searchResult?.id || '').fullName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium text-gray-900">{getCourseDetails(searchResult?.id || '').duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Certificate Issue Date</p>
                          <p className="font-medium text-gray-900">March 23, 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
                <div className="bg-red-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                  <XCircle className="h-12 w-12 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-red-700 mb-2">Invalid Certificate</h2>
                  <p className="text-gray-700 mb-4">We couldn't verify this certificate. Please check the ID and try again.</p>
                  <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                    <p className="text-gray-700">
                      If you believe this is an error, please contact our support team at <a href="mailto:support@edutou.in" className="text-[var(--color-brand-dark)] hover:underline">support@edutou.in</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
          <div className="flex items-center mb-4">
            <Award className="h-6 w-6 text-[var(--color-brand-dark)] mr-2" />
            <h2 className="text-xl font-semibold text-black">About Our Certificates</h2>
          </div>
          <p className="text-gray-700 mb-4">
            EDUTOU certificates are issued to students who have successfully completed our courses and met all the requirements. 
            Each certificate has a unique ID that can be verified through this page.
          </p>
          <p className="text-gray-700">
            Our certificates are recognized by industry partners and can help boost your career prospects. 
            For any questions regarding certification, please contact our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
