import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-10 py-6 flex flex-row items-center justify-between z-50">
  {/* Left: Logo */}
  <Link to="/" className="font-bold text-2xl">FocusFlow</Link>

  {/* Middle: Links */}
  <div className="flex space-x-10">
    <Link to="Goals.jsx" className="text-md font-light text-gray-700 hover:text-black">GoalSetter</Link>
    <Link to="Journal.jsx" className="text-md font-light text-gray-700 hover:text-black">Learning Log</Link>
    <Link to="Timer.jsx" className="text-md font-light text-gray-700 hover:text-black">Pomodoro</Link>
  </div>

  {/* Right: Buttons */}
  <div className="flex space-x-4">
    <div className="w-[148px] h-[38px] bg-[#ffffff] border-[1px] border-[#000000] rounded-[6px] flex items-center justify-center">
      <Link to="Login.jsx" className="text-md font-medium text-black">Login</Link>
    </div>
    <div className="w-[148px] h-[38px] bg-[#000000] rounded-[6px] flex items-center justify-center">
      <Link to="signup.jsx" className="text-md font-medium text-white">Signup</Link>
    </div>
  </div>
</nav>

  );
}
