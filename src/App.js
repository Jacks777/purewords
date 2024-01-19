import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Read from "./Pages/Read";

import "./App.css";
import "./Bible_reading.css";

function App() {
  return (
    <div className="main_app_container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
