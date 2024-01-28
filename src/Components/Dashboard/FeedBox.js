import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const FeedBox = ({
  feedData,
  handleDelete,
  handleDeleteCheck,
  handleLikePost,
}) => {
  const [heartHover, setHeartHover] = useState(false);

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
  const { currentUser } = useAuth();

  const currentUserId = currentUser.uid;

  return (
    <div className="dashboard_feed_box">
      <div className="dashboard_feed_box_inner">
        <div className="dashboard_feed_box_top">
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
          <div className="actions_utils">
            <p className="actions_report">Report</p>
            {currentUser.uid === feedData.postProfile && (
              <p
                className="actions_delete actions"
                // onClick={() => handleDelete(feedData.id)}
                onClick={() => handleDeleteCheck(feedData.id)}
              >
                Delete
              </p>
            )}
          </div>
          <div className="dashboard_feed_box_end_actions">
            {feedData.likes && feedData.likes.length > 0 && (
              <p>{feedData.likes.length}</p>
            )}
            {!feedData.likes || !feedData.likes.includes(currentUserId) ? (
              <div
                className="actions_like_box"
                onPointerEnter={() => setHeartHover(true)}
                onPointerLeave={() => setHeartHover(false)}
              >
                {!heartHover ? (
                  <img
                    src="assets/heart_empty.svg"
                    alt="heart empty like"
                    className="actions_like actions"
                    onClick={() => handleLikePost(feedData.id, currentUserId)}
                  />
                ) : (
                  <img
                    src="assets/heart_fill.svg"
                    alt="heart filled like"
                    className="actions_like actions"
                    onClick={() => handleLikePost(feedData.id, currentUserId)}
                  />
                )}
              </div>
            ) : (
              <div className="actions_like_box">
                <img
                  src="assets/heart_fill.svg"
                  alt="heart filled like"
                  className="actions_like actions"
                  onClick={() => handleLikePost(feedData.id, currentUserId)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBox;
