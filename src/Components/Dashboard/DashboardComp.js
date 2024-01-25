import React, { useEffect, useState } from "react";

import "../../dashboard.css";
import FeedBox from "./FeedBox";
import { collection, getDocs } from "firebase/firestore";
import { postDB } from "../../firebase";

const DashboardComp = () => {
  const [feed, setFeed] = useState([]);

  const getFeed = async () => {
    const valRef = collection(postDB, "posts");
    const dataDb = await getDocs(valRef);

    const allFeedData = dataDb.docs.map((val) => ({
      ...val.data(),
      id: val.id,
    }));
    setFeed(allFeedData);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="dashboard_container">
      <div className="dashboard_container_feed">
        {feed.length === 0 ? (
          <p>Sorry, no posts here yet.</p>
        ) : (
          feed.map((feedData) => (
            <FeedBox key={feedData.id} feedData={feedData} />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardComp;
