import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Music from "@/pages/Music";
import Records from "@/pages/Records";
import "./App.css";

const App = () => {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/music" element={<Music />} />
            <Route path="/records" element={<Records />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
