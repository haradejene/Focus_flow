import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <div className="">

        <Routes>
          <Route path="/" element={<HomePage />} />
        
        </Routes>
      </div>
    </Router>
  );
}
