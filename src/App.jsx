import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto">

        <Routes>
          <Route path="/" element={<Dashboard />} />
        
        </Routes>
      </div>
    </Router>
  );
}
