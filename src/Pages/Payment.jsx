import React, { useState } from 'react';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Payment details submitted:', paymentDetails);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-primary mb-6">
          Payment Information
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="1234 5678 9101 1121"
            />
          </div>

          {/* Card Holder Name */}
          <div className="mb-4">
            <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">
              Card Holder's Name
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={paymentDetails.cardHolder}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="John Doe"
            />
          </div>

          {/* Expiration Date and CVV */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="123"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md text-sm font-semibold hover:bg-green-600 transition-all duration-300 mt-6"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
