import React, { useEffect, useState } from "react";

import "../../dashboard.css";
import FeedBox from "./FeedBox";

import { postDB } from "../../firebase";
import {
  deleteDoc,
  doc,
  collection,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  orderBy,
} from "firebase/firestore";

const DashboardComp = ({ openCheckDelete, handleToggleCheckDelete }) => {
  const [feed, setFeed] = useState([]);
  const [deleteId, setDeleteId] = useState("");

  const handleDeleteCheck = (postId) => {
    if (openCheckDelete) {
      handleToggleCheckDelete(false);
      setDeleteId("");
    } else {
      handleToggleCheckDelete(true);
      setDeleteId(postId);
    }
  };

  const getFeed = async () => {
    const valRef = collection(postDB, "posts");
    const dataDb = await getDocs(valRef, orderBy("timestamp", "desc"));

    const allFeedData = dataDb.docs.map((val) => ({
      ...val.data(),
      id: val.id,
    }));
    setFeed(allFeedData);
  };

  useEffect(() => {
    getFeed();
  }, []);

  const handleDelete = async () => {
    const posts = "posts";
    const documentId = deleteId;

    try {
      const documentRef = doc(postDB, posts, documentId);
      await deleteDoc(documentRef);
      console.log(`Document with ID ${documentId} deleted successfully.`);
      setFeed((prevFeed) =>
        prevFeed.filter((feedData) => feedData.id !== documentId)
      );
      handleToggleCheckDelete(false);
    } catch (error) {
      console.error("Error deleting document:", error);
      handleToggleCheckDelete(false);
    }
  };

  const handleLikePost = async (postId, currentUserId) => {
    try {
      const postDocRef = doc(postDB, "posts", postId);
      const postDocSnapshot = await getDoc(postDocRef);

      if (postDocSnapshot.exists()) {
        const postData = postDocSnapshot.data();

        // Assuming there's a "likes" field (array) in the post data
        const existingLikes = postData.likes || [];

        // Check if the current user has already liked the post
        if (!existingLikes.includes(currentUserId)) {
          // Add the current user to the likes array
          const updatedLikes = [...existingLikes, currentUserId];

          // Update the post with the new likes array
          await updateDoc(postDocRef, { likes: updatedLikes });

          console.log(`User ${currentUserId} liked post with ID: ${postId}`);

          // Update local state (feed) to reflect the new likes
          setFeed((prevFeed) =>
            prevFeed.map((feedData) =>
              feedData.id === postId
                ? { ...feedData, likes: updatedLikes }
                : feedData
            )
          );
        } else {
          console.log(
            `User ${currentUserId} already liked post with ID: ${postId}`
          );

          const updatedLikes = existingLikes.filter(
            (id) => id !== currentUserId
          );

          // Update the post with the updated likes array
          await updateDoc(postDocRef, { likes: updatedLikes });

          console.log(`User ${currentUserId} UNliked post with ID: ${postId}`);

          // Update local state (feed) to reflect the new likes
          setFeed((prevFeed) =>
            prevFeed.map((feedData) =>
              feedData.id === postId
                ? { ...feedData, likes: updatedLikes }
                : feedData
            )
          );
        }
      } else {
        console.log(`Post with ID ${postId} not found.`);
      }
    } catch (error) {
      console.error("Error handling post like:", error);
    }
  };

  return (
    <>
      {openCheckDelete && (
        <div className="container_delete">
          <div className="delete_box">
            <div className="delete_box_inner">
              <h3>Are you sure you want to delete this post?</h3>
              <div className="delete_box_end">
                <p className="option option_yes" onClick={() => handleDelete()}>
                  Yes
                </p>
                <p
                  className="option option_no"
                  onClick={() => handleToggleCheckDelete(false)}
                >
                  Maybe later
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`dashboard_container ${openCheckDelete && "delete_active"}`}
      >
        <div className="dashboard_container_feed">
          {feed.length === 0 ? (
            <p>Sorry, no posts here yet.</p>
          ) : (
            feed.map((feedData) => (
              <FeedBox
                handleLikePost={handleLikePost}
                handleDeleteCheck={handleDeleteCheck}
                handleDelete={handleDelete}
                key={feedData.id}
                feedData={feedData}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardComp;
