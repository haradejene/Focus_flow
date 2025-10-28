import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleLogout = () => {
    setCurrentUser(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6 flex flex-row items-center justify-between z-50 transition-transform duration-300  ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Left: Logo */}
        <Link 
          to="/" 
          className="font-bold text-xl sm:text-2xl lg:text-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          FocusFlow
        </Link>

        {/* Middle: Links - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex space-x-6 lg:space-x-10">
          <Link 
            to="/goals" 
            className="text-sm lg:text-md font-light text-gray-700 hover:text-black transition-colors"
          >
            GoalSetter
          </Link>
          <Link 
            to="/learning" 
            className="text-sm lg:text-md font-light text-gray-700 hover:text-black transition-colors"
          >
            Learning Log
          </Link>
          <Link 
            to="/timer" 
            className="text-sm lg:text-md font-light text-gray-700 hover:text-black transition-colors"
          >
            Pomodoro
          </Link>
        </div>

        {/* Right: Buttons - Conditionally render based on auth state */}
        <div className="hidden md:flex space-x-3 lg:space-x-4 items-center">
          {currentUser ? (
            // User is logged in - show welcome message and logout
            <>
              <span className="text-sm lg:text-md font-light text-gray-700 mr-3 lg:mr-4 truncate max-w-[120px] lg:max-w-none">
                Welcome, {currentUser.name}!
              </span>
              <div 
                className="w-[120px] lg:w-[148px] h-[34px] lg:h-[38px] bg-black border border-black text-white rounded-[6px] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                onClick={handleLogout}
              >
                <span className="text-sm lg:text-md font-medium">Logout</span>
              </div>
            </>
          ) : (
            // User is not logged in - show login/signup buttons
            <>
              <div className="w-[100px] lg:w-[148px] h-[34px] lg:h-[38px] bg-white border border-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                <Link to="/loginpage" className="text-sm lg:text-md font-medium px-2 text-center">
                  Login
                </Link>
              </div>
              <div className="w-[100px] lg:w-[148px] h-[34px] lg:h-[38px] bg-black border border-black text-white rounded-[6px] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Link to="/signuppage" className="text-sm lg:text-md font-medium px-2 text-center">
                  Signup
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col space-y-8">
          {/* Mobile Navigation Links */}
          <Link 
            to="/goals" 
            className="text-xl font-light text-gray-700 hover:text-black border-b pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GoalSetter
          </Link>
          <Link 
            to="/learning" 
            className="text-xl font-light text-gray-700 hover:text-black border-b pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Learning Log
          </Link>
          <Link 
            to="/timer" 
            className="text-xl font-light text-gray-700 hover:text-black border-b pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pomodoro
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col space-y-4 pt-4">
            {currentUser ? (
              <>
                <div className="text-center py-3 border-b">
                  <span className="text-lg font-medium text-gray-700">
                    Welcome, {currentUser.name}!
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full h-[48px] bg-black text-white rounded-[6px] flex items-center justify-center hover:bg-gray-800 transition-all duration-300 text-lg font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/loginpage" 
                  className="w-full h-[48px] bg-white border border-black rounded-[6px] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signuppage" 
                  className="w-full h-[48px] bg-black border border-black text-white rounded-[6px] flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}