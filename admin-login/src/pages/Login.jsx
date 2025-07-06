import React from "react";
import InputField from "../components/InputField";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { loginConstants as c } from "../utils/constants";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <img src={logo} alt="Bluestock Logo" className="h-12 mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <InputField
            label="Email Address"
            type="email"
            placeholder={c.EMAIL_PLACEHOLDER}
          />

          <div className="relative">
            <InputField
              label="Password"
              type="password"
              placeholder={c.PASSWORD_PLACEHOLDER}
            />
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* reCAPTCHA UI Placeholder */}
          <div className="mt-3">
            <div className="border border-gray-300 rounded-md p-3 flex items-center justify-between">
              <span className="text-sm text-green-600">✅ I'm not a robot</span>
              <div className="w-6 h-6 bg-gray-200 rounded-sm" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Checkbox label={c.REMEMBER_ME} />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-purple-700 text-white w-full py-2 rounded-lg mt-4"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or sign in with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-In */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm">Continue with Google</span>
          </button>

          {/* Create Account Link */}
          <div className="text-center mt-4">
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
