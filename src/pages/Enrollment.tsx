import React, { useState } from "react";
import {
  Clock,
  Calendar,
  Users,
  CheckCircle,
  BookOpen,
  Trophy,
  Star,
} from "lucide-react";

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    referralCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const benefits = [
    { icon: <BookOpen className="h-6 w-6" />, text: "Live Classes For all 7 days" },
    { icon: <Trophy className="h-6 w-6" />, text: "Certificate of Completion with online verification" },
    { icon: <Star className="h-6 w-6" />, text: "1 Year of Community Support" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Limited slots available, book now and secure your spots" },
  ];

 const handlePhonePePayment = async () => {
  if (!formData.name || !formData.email || !formData.phone || !formData.college) {
    setMessage("Please fill in all required fields.");
    return;
  }

  if (!/^\d{10}$/.test(formData.phone)) {
    setMessage("Please enter a valid 10-digit WhatsApp number.");
    return;
  }

  try {
    setLoading(true);
    setMessage("");

    const response = await fetch("https://edutoubackend.onrender.com/api/payment/initiate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 100, // Amount in INR
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        referralCode: formData.referralCode || "", // Avoid null if not filled
        courseName: "Full Stack Foundation Workshop",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Specific message if available from server
      setMessage(data?.message || "Payment initiation failed.");
      return;
    }

    if (data?.redirectUrl) {
      window.location.href = data.redirectUrl;
    } else {
      setMessage("Failed to get redirect URL. Please try again.");
    }
  } catch (error) {
    console.error("Payment error:", error);
    setMessage("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
            <div className="animate-pulse inline-block bg-yellow-400 text-black font-bold px-4 py-1 rounded-full mb-4">
              🎯 Limited Seats Available
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Full Stack Foundation Workshop
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Clock className="h-5 w-5" />
                <span>7 Days Intensive</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Calendar className="h-5 w-5" />
                <span>Live Sessions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Users className="h-5 w-5" />
                <span>Limited Seats</span>
              </div>
            </div>

            <div className="text-6xl font-bold mb-6">
              ₹100 <span className="text-lg ml-2">for complete access</span>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Secure Your Seat Now</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <input
              type="text"
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="tel"
              required
              placeholder="WhatsApp Number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="text"
              required
              placeholder="College / Institution"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
            />
            <input
              type="text"
              placeholder="Referral Code (Optional)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.referralCode}
              onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
            />

            <button
              type="button"
              onClick={handlePhonePePayment}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay with PhonePe"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-red-600 font-semibold">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
