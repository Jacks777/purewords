import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../navbottom.css";
import { useAuth } from "../../contexts/AuthContext";

const NavBottom = () => {
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
    <div className="navbottom_container">
      <div className="navbottom_link_box">
        <Link className="navbottom_link_comp" to="/dashboard">
          <img
            className="navbottom_link_svg"
            src="/assets/home.svg"
            alt="svg home"
          />
          <p className="navbottom_link_title">Home</p>
        </Link>
        {/* TODO! */}
        <Link className="navbottom_link_comp" to="/prayers">
          <img
            className="navbottom_link_svg"
            src="/assets/rosary.svg"
            alt="svg rosary"
          />
          <p className="navbottom_link_title">Prayers</p>
        </Link>
        <Link className="navbottom_link_comp" to="/new-post">
          <img
            className="navbottom_link_svg navbottom_link_main_svg"
            src="/assets/plus.svg"
            alt="svg plus"
          />
        </Link>
        <Link className="navbottom_link_comp" to="/dashboard">
          <img
            className="navbottom_link_svg"
            src="/assets/bible_dark.svg"
            alt="svg bible"
          />
          <p className="navbottom_link_title">Plans</p>
        </Link>
        <Link className="navbottom_link_comp" to={profilePageLink}>
          <img
            className="navbottom_link_svg"
            src="/assets/user.svg"
            alt="svg user"
          />
          <p className="navbottom_link_title">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;
