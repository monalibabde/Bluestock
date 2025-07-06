import React from "react";
import InputField from "../components/InputField";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <img src={logo} alt="Bluestock Logo" className="h-12 mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <InputField label="Name" type="text" placeholder="Shrutika Shinde" />
          <InputField label="Email Address" type="email" placeholder="hello@bluestock.in" />
          <div className="relative">
            <InputField label="Password" type="password" placeholder="••••••••••••" />
            <span className="absolute top-10 right-4 text-gray-500 cursor-pointer">
              👁️
            </span>
          </div>

          <p className="text-xs text-gray-600">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary underline">terms of service</a>.
          </p>

          {/* reCAPTCHA placeholder */}
          <div className="border border-gray-300 rounded-md p-3 flex items-center justify-between">
            <span className="text-sm text-green-600">✅ I'm not a robot</span>
            <div className="w-6 h-6 bg-gray-200 rounded-sm" />
          </div>

          {/* Sign Up Button */}
          <Link to="/">
            <Button label="Sign up" />
          </Link>


          {/* Or sign up with Google */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or sign up with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm">Continue with Google</span>
          </button>

          {/* Link to Login */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-primary font-medium">Sign in here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
