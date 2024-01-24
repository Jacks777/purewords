import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/HomePage";
import Read from "./Pages/ReadPage";

import "./App.css";
import "./Bible_reading.css";
import "./search.css";

import Search from "./Pages/SearchPage";
import Register from "./Pages/RegisterPage";
import Login from "./Pages/LoginPage";

function App() {
  return (
    <div className="main_app_container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
