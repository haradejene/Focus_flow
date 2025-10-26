import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Timer from "./pages/Timer";

export default function App() {
  return (
    <Router>
      <div className="">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timer" element={<Timer />} />
        
        </Routes>
      </div>
    </Router>
  );
}
