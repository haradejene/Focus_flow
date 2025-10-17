import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between p-4 rounded-b-2xl shadow-md">
      <h1 className="font-bold text-xl">FocusFlow</h1>
      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
       <h1 className="text-blue-500">hello world</h1>
      </div>
    </nav>
  );
}
