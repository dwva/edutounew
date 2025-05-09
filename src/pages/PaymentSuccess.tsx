import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
        <Check className="w-12 h-12 text-green-600" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for enrolling. You will receive course details via email shortly.
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
