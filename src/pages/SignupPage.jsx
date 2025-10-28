import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useLocalStorage from "../hooks/useLocalStorage";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useLocalStorage("users", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Check if user already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      setError("An account with this email already exists");
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setCurrentUser(newUser);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      
      {/* Blurred background */}
      <div className="fixed inset-0 bg-cover bg-center blur-sm -z-10"
      style={{ backgroundImage: 'url(/Homepage-bg.png)' }}></div>
      
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <div className="w-[400px] min-h-[500px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg border border-white border-opacity-30 p-8 flex flex-col items-center">
          {/* Welcome Text */}
          <h1 className="text-3xl font-bold text-black mb-8 mt-4">
            Create Account
          </h1>

          {/* Error Message */}
          {error && (
            <div className="w-full bg-red-500 bg-opacity-50 text-white p-3 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="w-full flex flex-col items-center gap-4">
            {/* Name Input */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[273px] h-[43px] bg-white bg-opacity-90 rounded px-4 focus:outline-none focus:ring-2 focus:ring-[#8A46E2] mx-auto block"
                required
              />
            </div>

            {/* Email Input */}
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[273px] h-[43px] bg-white bg-opacity-90 rounded px-4 focus:outline-none focus:ring-2 focus:ring-[#8A46E2] mx-auto block"
                required
              />
            </div>

            {/* Password Input */}
            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[273px] h-[43px] bg-white bg-opacity-90 rounded px-4 focus:outline-none focus:ring-2 focus:ring-[#8A46E2] mx-auto block"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="w-full">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-[273px] h-[43px] bg-white bg-opacity-90 rounded px-4 focus:outline-none focus:ring-2 focus:ring-[#8A46E2] mx-auto block"
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-[273px] h-[43px] bg-black text-white rounded font-semibold hover:bg-[#8A46E2] transition-all duration-300 mt-4"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-black">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#8A46E2] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}