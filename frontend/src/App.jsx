import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Figures from "./pages/Figures.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/figures" element={<Figures />} />
      </Routes>
    </div>
  );
};

export default App;
