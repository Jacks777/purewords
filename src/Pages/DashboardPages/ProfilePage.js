import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBottom from "../../Components/Dashboard/NavBottom";

const ProfilePage = () => {
  const { uid } = useParams();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

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

  // If UID is provided in the URL, show the specified user's profile
  // Otherwise, show the current user's profile
  const targetUid = uid || (currentUser && currentUser.uid);

  return (
    <div>
      <h1>User Profile</h1>
      {targetUid ? (
        <>
          <p>User ID: {targetUid}</p> <h3>Hi! {currentUser.email}</h3>
          {error}
          <button onClick={handleLogout}>log out</button>
          <Link to="/update-profile">Update Profile</Link>
          {/* Display other user profile information */}
        </>
      ) : (
        <p>No user ID provided or user not found.</p>
      )}
      <NavBottom />
    </div>
  );
};

export default ProfilePage;
