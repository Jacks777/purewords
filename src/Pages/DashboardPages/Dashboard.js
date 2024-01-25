import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import NavBottom from "../../Components/Dashboard/NavBottom";
import DashboardComp from "../../Components/Dashboard/DashboardComp";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [profilePageLink, setProfilePageLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setProfilePageLink(`/profile-page/${currentUser.uid}`);
    }
  }, [currentUser]);

  return (
    <>
      <DashboardComp />
      <NavBottom profilePageLink={profilePageLink} />
    </>
  );
}
