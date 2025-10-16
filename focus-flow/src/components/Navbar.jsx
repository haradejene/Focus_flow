import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between p-4 rounded-b-2xl shadow-md">
      <h1 className="font-bold text-xl">FocusFlow</h1>
      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/timer">Timer</Link>
      </div>
    </nav>
  );
}
