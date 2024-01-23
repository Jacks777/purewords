import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Read from "./Pages/Read";

import "./App.css";
import "./Bible_reading.css";
import "./search.css";

import Search from "./Pages/Search";

function App() {
  return (
    <div className="main_app_container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
