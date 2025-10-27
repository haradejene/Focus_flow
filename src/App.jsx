import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Timer from "./pages/Timer";
import Goals from "./pages/Goals";
import Learning from "./pages/Learning";
export default function App() {
  return (
    <Router>
      <div className="">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
      </div>
    </Router>
  );
}
