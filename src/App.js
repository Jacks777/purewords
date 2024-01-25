import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/HomePage";
import Read from "./Pages/ReadPage";

import "./App.css";
import "./Bible_reading.css";
import "./search.css";

import Search from "./Pages/SearchPage";
import Register from "./Pages/authPages/RegisterPage";
import Login from "./Pages/authPages/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./Pages/DashboardPages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import NotFound from "./Pages/NotFound";
import UpdateProfile from "./Pages/authPages/UpdateProfile";
import ForgotPassword from "./Pages/authPages/ForgotPassword";
import ProfilePage from "./Pages/DashboardPages/ProfilePage";

function App() {
  return (
    <div className="main_app_container">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/dashboard" element={<PrivateRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/update-profile" element={<PrivateRoute />}>
              <Route exact path="/update-profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/profile-page/:uid" element={<PrivateRoute />}>
              <Route path="/profile-page/:uid" element={<ProfilePage />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<Read />} />
            <Route path="/search" element={<Search />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
