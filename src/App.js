import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import NoPage from "./Pages/NoPage";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
