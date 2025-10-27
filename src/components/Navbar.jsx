import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-10 py-6 flex flex-row items-center justify-between z-50  transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Left: Logo */}
      <Link to="/" className="font-bold text-2xl">
        FocusFlow
      </Link>

      {/* Middle: Links */}
      <div className="flex space-x-10">
        <Link to="/goals" className="text-md font-light text-gray-700 hover:text-black">
          GoalSetter
        </Link>
        <Link to="/learning" className="text-md font-light text-gray-700 hover:text-black">
          Learning Log
        </Link>
        <Link to="/timer" className="text-md font-light text-gray-700 hover:text-black">
          Pomodoro
        </Link>
      </div>

      {/* Right: Buttons */}
      <div className="flex space-x-4">
        <div className="w-[148px] h-[38px] bg-white border border-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
          <Link to="/login" className="text-md font-medium">
            Login
          </Link>
        </div>
        <div className="w-[148px] h-[38px] bg-black border border-black text-white rounded-[6px] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
          <Link to="/signup" className="text-md font-medium">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
