import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";


// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));


const Contact = lazy(() => import("./pages/Contact"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Enrollment = lazy(() => import("./pages/Enrollment"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const Webinar = lazy(() => import("./pages/Webinar"));
const VerificationPage = lazy(() => import("./pages/VerificationPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PROJECTS = lazy(() => import("./pages/allcourses"));
const Currentcourse = lazy(() => import("./pages/currentcourse"));
const Tesnomialcard = lazy(() => import("./pages/testnomialcard"));

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow relative">
       
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/enroll" element={<Enrollment />} />
            <Route path="/webinars" element={<Webinar />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/certifications" element={<VerificationPage />} />
            <Route path="/PROJECTS" element={<PROJECTS />} />
            <Route path="/currentcourse" element={<Currentcourse />} />
            <Route path="/testnomialcard" element={<Tesnomialcard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
