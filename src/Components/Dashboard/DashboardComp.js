import React from "react";

import "../../dashboard.css";
import FeedBox from "./FeedBox";

const DashboardComp = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_container_feed">
        <FeedBox />
        <FeedBox />
        <FeedBox />
        <FeedBox />
        <FeedBox />
      </div>
    </div>
  );
};

export default DashboardComp;
