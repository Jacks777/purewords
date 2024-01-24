import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch (error) {
      setError("Failed to log out.");
    }
  }
  return (
    <div>
      <h3>Hi! {currentUser.email}</h3>
      {error}
      <button onClick={handleLogout}>log out</button>
      <Link to="/update-profile">Update Profile</Link>
    </div>
  );
}
