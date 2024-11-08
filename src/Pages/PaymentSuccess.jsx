import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Importing success icon from react-icons

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Success Icon */}
        <AiOutlineCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        
        {/* Success Message */}
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Payment Successful!</h2>
        
        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">
          Your payment of <span className="font-bold text-green-600">15,000</span> for Assessment and Registration has been successfully processed.
        </p>
        
        {/* Additional Information */}
        <p className="text-sm text-gray-500 mb-6">
          You will receive a confirmation email shortly. Please check your inbox for further details.
        </p>
        
        {/* Button to go back or continue */}
        <div className="mt-6">
          <button
            className="w-full bg-green-500 text-white py-3 rounded-md text-sm font-semibold hover:bg-green-600 transition-all duration-300"
            onClick={() => window.location.href = "/"} // Redirects to homepage or desired page
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
