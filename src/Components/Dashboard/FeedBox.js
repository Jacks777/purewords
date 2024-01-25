import React from "react";

const FeedBox = ({ feedData }) => {
  function timeAgo(timestamp) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      return "recent";
    }
  }

  return (
    <div className="dashboard_feed_box">
      <div className="dashboard_feed_box_inner">
        <div className="dashboard_feed_box_top">
          {/* <h4 className="dashboard_feed_box_top_title">Name goes here</h4> */}
          <p className="dashboard_feed_box_top_date">
            {timeAgo(feedData.uploadTime)}
          </p>
        </div>
        <div className="dashboard_feed_box_content">
          <h3 className="dashboard_feed_box_content_title">
            {feedData.postTitle}
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: feedData.postContent.replace(/\n/g, "<br />"),
            }}
            className="dashboard_feed_box_content_text"
          ></p>
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
