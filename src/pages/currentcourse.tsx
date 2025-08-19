import React from 'react';
import { Calendar, Mail, Phone, Clock, DollarSign, User } from 'lucide-react';

const AICoursePromotion = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Main Hero Section */}
      <div className="relative px-6 py-12 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content - AI Image */}
            <div className="relative flex justify-center items-center order-2 lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center"
                    alt="AI Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Price Badge */}
                <div className="absolute -top-4 -right-6 bg-orange-400 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow">
                  ₹100 <span className="block text-xs opacity-80">Limited</span>
                </div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="space-y-4 text-right order-1 lg:order-2">
              <h1 className="text-3xl lg:text-4xl font-bold leading-snug text-black">
                CRACK AI <br />
                <span className="text-orange-400">ESSENTIALS</span> <br />
                IN 3 DAYS
              </h1>

              <button
  onClick={() => (window.location.href = "/enroll")}
  className="bg-orange-400 text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-orange-500 transition shadow-sm hover:shadow-md"
>
  ENROLL NOW
</button>


              {/* Quick Stats */}
              <div className="flex items-center justify-end space-x-3">
                <div>
                  <div className="text-2xl font-bold text-orange-400">3</div>
                  <div className="text-gray-600 text-xs">Days Only</div>
                </div>
                <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center animate-pulse">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Course Information */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-black mb-4">Course Details</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-black">Duration</div>
                  <div className="text-gray-600 text-xs">3 Days</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-black">Course Date</div>
                  <div className="text-gray-600 text-xs">Sept 1-3</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-black">Price</div>
                  <div className="text-gray-600 text-xs">₹100 Rupees</div>
                </div>
              </div>
            </div>

            <div className="text-gray-500 text-xs pt-4 border-t border-gray-200 mt-4">
              AI Essentials & Fundamentals
            </div>
          </div>

          {/* Main Course Promotion */}
          <div className="bg-orange-400 text-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">AI Essentials</h3>
            <p className="text-sm mb-2">
              Master AI fundamentals in just 3 intensive days.
            </p>
            <p className="text-xs opacity-90">
              Learn concepts, basics of ML, and practical applications.
            </p>

            <div className="flex items-center space-x-3 mt-5">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full border flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-white rounded-full border-2 border-orange-400"></div>
                <div className="w-8 h-8 bg-black/20 rounded-full border"></div>
              </div>
              <div>
                <div className="text-sm font-bold">JOIN NOW</div>
                <div className="text-xs opacity-80">Limited Seats →</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-black text-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-1">CONTACT</h3>
            <div className="text-xs text-gray-400 mb-4">Get in Touch</div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-400 rounded-md flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs">edutouskillacademy@gmail.com</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-400 rounded-md flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs">@Rishi maple</div>
              </div>
            </div>

            <div className="grid grid-cols-8 gap-1 pt-4 mt-4 border-t border-gray-700">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoursePromotion;
