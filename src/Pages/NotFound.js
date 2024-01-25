import React from "react";
import { Link } from "react-router-dom";
import "../notfound.css";

const NotFound = () => {
  return (
    <div className="page_not_found">
      <div className="page_not_found_inner">
        <h3 className="page_not_found_title">Page Not Found</h3>
        <p className="page_not_found_verse">
          “Trust in the Lord with all your heart and lean not on your own
          understanding; in all your ways submit to him, and he will make your
          paths straight.”
        </p>
        <p className="page_not_found_chapter">Proverbs 3:5-6</p>
        <Link to="/" className="page_not_found_info">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
