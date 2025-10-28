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
      <div className="fixed inset-0 bg-homepage-background bg-cover bg-center blur-sm -z-10"
      style={{ backgroundImage: 'url(/Homepage-bg.png)' }}></div>
      
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <div className="w-[400px] h-[500px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg border border-white border-opacity-30 p-8 flex flex-col items-center">
          {/* Welcome Text */}
          <h1 className="text-3xl font-bold text-black mb-8 mt-4">
            Welcome back!
          </h1>

          {/* Error Message */}
          {error && (
            <div className="w-full bg-red-500 bg-opacity-50 text-white p-3 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-6">
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-[273px] h-[43px] bg-black text-white rounded font-semibold hover:bg-[#8A46E2] transition-all duration-300 mt-4"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-6 text-center">
            <p className="text-black">
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