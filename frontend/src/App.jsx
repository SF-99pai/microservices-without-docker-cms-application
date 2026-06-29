import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Departments from "./pages/Departments";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;