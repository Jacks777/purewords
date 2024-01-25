import React from "react";
import { Link } from "react-router-dom";

import "../../navbottom.css";

const NavBottom = ({ profilePageLink }) => {
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
        <Link className="navbottom_link_comp" to="/dashboard">
          <img
            className="navbottom_link_svg"
            src="/assets/rosary.svg"
            alt="svg rosary"
          />
          <p className="navbottom_link_title">Rosary</p>
        </Link>
        <Link className="navbottom_link_comp" to="/dashboard">
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
          <p className="navbottom_link_title">Read</p>
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
