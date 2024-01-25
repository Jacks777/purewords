import React from "react";

const FeedBox = () => {
  return (
    <div className="dashboard_feed_box">
      <div className="dashboard_feed_box_inner">
        <div className="dashboard_feed_box_top">
          <h4 className="dashboard_feed_box_top_title">Name</h4>
          <p className="dashboard_feed_box_top_date">3 days ago</p>
        </div>
        <div className="dashboard_feed_box_content">
          <h3 className="dashboard_feed_box_content_title">
            Title of the post
          </h3>
          <p className="dashboard_feed_box_content_text">
            This is the content of the post!
          </p>
        </div>
        <div className="dashboard_feed_box_end">
          <p className="actions_report">Report</p>
          <div className="dashboard_feed_box_end_actions">
            <p className="actions_reply">Reply</p>
            <p className="actions_like">Like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBox;
