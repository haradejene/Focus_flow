import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Timer from "./pages/Timer";
import Goals from "./pages/Goals";

export default function App() {
  return (
    <Router>
      <div className="">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/goals" element={<Goals />} />
        
        </Routes>
      </div>
    </Router>
  );
}
