import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "../../newpost.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { postDB } from "../../firebase";

export default function NewPostForm() {
  const { uid } = useParams();
  const { currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");

  const targetUid = uid || (currentUser && currentUser.uid);

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    if (!title) {
      setError("Please add a title.");
      setLoading(false);
    }
    if (!content) {
      setError("Please add some content.");
      setLoading(false);
    }
    const uploadTime = new Date().getTime();
    const valRef = collection(postDB, "posts");

    try {
      await addDoc(valRef, {
        postTitle: title,
        postContent: content,
        postProfile: targetUid,
        uploadTime: uploadTime,
      });

      setTitle("");
      setContent("");
      setMessage("Post created!");
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post.");
    }
  };

  return (
    <div className="newpost_container">
      <form onSubmit={handleSubmitPost}>
        <div className="error_message_auth_box">
          <div className={`error_message_auth ${error ? "active_error" : ""}`}>
            {error}
          </div>
        </div>
        <div className="message_auth_box">
          <div className={`message_auth ${message ? "active_message" : ""}`}>
            {message}
          </div>
        </div>

        <div className="form_innercontainer">
          <h3>Make a new post</h3>

          <input
            value={title}
            maxLength={50}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={400}
            className="input_content"
            type="text"
            placeholder="Content post"
          />
          <div className="newpostButton_container">
            <Link className="forgotPasswordButton" to="/dashboard">
              Cancel
            </Link>
            <button disabled={loading} className="newpostButton">
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
