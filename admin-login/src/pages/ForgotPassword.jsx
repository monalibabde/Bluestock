import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // simulate email sent
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <img src={logo} alt="Bluestock Logo" className="h-12 mx-auto mb-2" />
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold text-gray-900">Forgot Password?</h1>
              <p className="text-sm text-gray-600 mt-2">
                Enter your email address to get the password reset link.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm text-left font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hello@bluestock.in"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg transition duration-200"
                >
                  Password Reset
                </button>
              </form>

              <div className="mt-4">
                <Link to="/" className="text-md text-black font-medium hover:underline">
                  Back to login
                </Link>
              </div>

            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900">Check Your Email 📬</h1>
              <p className="text-sm text-gray-600 mt-2">
                We've sent you instructions to reset your password. <br />
                Thank you for trusting <span className="text-purple-600 font-semibold">Bluestock</span>!
              </p>

              <div className="mt-6">
                <Link to="/" className="text-md text-blue-600 font-medium hover:underline">
                  Return to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
