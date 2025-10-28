import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useLocalStorage("users", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Find user in localStorage
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setCurrentUser(user);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Blurred background */}
      <div 
        className="fixed inset-0 bg-cover bg-center blur-sm -z-10"
        style={{ backgroundImage: 'url(/Homepage-bg.png)' }}
      ></div>
      
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative z-10">
        <div className="w-full max-w-[400px] min-h-[500px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg border border-white border-opacity-30 p-6 sm:p-8 flex flex-col items-center">
          {/* Welcome Text */}
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 mt-2 sm:mt-4 text-center">
            Welcome back!
          </h1>

          {/* Error Message */}
          {error && (
            <div className="w-full bg-red-500 bg-opacity-50 text-white p-3 rounded mb-4 text-center text-sm sm:text-base">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-4 sm:gap-6">
            {/* Email Input */}
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-[273px] h-[43px] bg-white bg-opacity-90 rounded px-4 focus:outline-none focus:ring-2 focus:ring-[#8A46E2] mx-auto block text-sm sm:text-base"
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
                className="w-full max-w-[273px] h-[43px] bg-white bg-opacity-90 rounded px-4 focus:outline-none focus:ring-2 focus:ring-[#8A46E2] mx-auto block text-sm sm:text-base"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full max-w-[273px] h-[43px] bg-black text-white rounded font-semibold hover:bg-[#8A46E2] transition-all duration-300 mt-2 sm:mt-4 text-sm sm:text-base"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-black text-sm sm:text-base">
              Don't have an account?{" "}
              <Link
                to="/signuppage"
                className="text-[#8A46E2] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}