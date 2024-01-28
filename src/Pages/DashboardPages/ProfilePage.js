import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBottom from "../../Components/Dashboard/NavBottom";

import "../../profilepage.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { postDB } from "../../firebase";

const ProfilePage = () => {
  const { uid } = useParams();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("");

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

  const targetUid = uid || (currentUser && currentUser.uid);

  const getUserData = async (targetUid) => {
    if (!targetUid) {
      console.error("Invalid targetUid");
      return;
    }

    const valRef = collection(postDB, "profiles");

    // Create a query to get only the document with the specified userId
    const q = query(valRef, where("userId", "==", targetUid));

    const dataDb = await getDocs(q);

    if (dataDb.size > 0) {
      // If a document with the specified userId is found, setUserData with that document
      const userData = {
        ...dataDb.docs[0].data(),
        id: dataDb.docs[0].id,
      };

      setUserData(userData);
      console.log(userData);

      console.log(dataDb);
    } else {
      // Handle the case when no document with the specified userId is found
      console.log("User not found");
    }
  };

  useEffect(() => {
    if (targetUid) {
      getUserData(targetUid);
    } else {
      console.error("Invalid targetUid");
    }
  }, [targetUid]);

  return (
    <>
      {targetUid ? (
        <>
          <div className="profile_container_main">
            {error}
            <div className="profile_container">
              <h3>{userData.username}</h3>
              <div className="profile_img_container">
                <img
                  className="profile_img"
                  src={userData.imageUrl}
                  alt="profile"
                />
              </div>
              <p>{userData.bio}</p>
              <button onClick={handleLogout}>log out</button>
              <Link to="/update-profile">Update Profile</Link>
              <Link to="/profile-page/add-profile-info">
                Update profile info
              </Link>
              {/* Display other user profile information */}
            </div>
          </div>
        </>
      ) : (
        <p>
          No user ID provided or user not found. Please refresh the page or mail
          to:
          <a href="mailto:invictusdeusofficial@gmail.com">
            invictusdeusofficial@gmail.com
          </a>
        </p>
      )}
      <NavBottom />
    </>
  );
};

export default ProfilePage;
