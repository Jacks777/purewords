import React, { useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { imgDB, postDB } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const AddInfoProfile = () => {
  const { uid } = useParams();
  const { currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [bio, setBio] = useState("");
  const [img, setImg] = useState("");

  const targetUid = uid || (currentUser && currentUser.uid);

  const handleUpload = (e) => {
    setLoading(true);
    console.log(e.target.files[0]);

    const imgs = ref(imgDB, `profileImgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        setImg(val);
        console.log(val);
      });
    });
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    // TOODO

    // ERROR
    // CHECKS
    // LOADING SCREEN
    //MORE?
    e.preventDefault(e);
    const valRef = collection(postDB, "profiles");

    await addDoc(valRef, {
      username: username,
      imageUrl: img,
      bio: bio,
      userId: targetUid,
    });
  };

  const handleAddInfoProfile = async (e) => {
    // e.preventDefault();
    // setError("");
    // setMessage("");
    // setLoading(true);
    // if (!title) {
    //   setError("Please add a title.");
    //   setLoading(false);
    // }
    // if (!content) {
    //   setError("Please add some content.");
    //   setLoading(false);
    // }
    // const uploadTime = new Date().getTime();
    // const valRef = collection(postDB, "posts");
    // try {
    //   await addDoc(valRef, {
    //     postTitle: title,
    //     postContent: content,
    //     postProfile: targetUid,
    //     uploadTime: uploadTime,
    //   });
    //   setTitle("");
    //   setContent("");
    //   setMessage("Post created!");
    // } catch (error) {
    //   console.error("Error creating post:", error);
    //   setError("Failed to create post.");
    // }
  };

  return (
    <div className="newpost_container">
      <form>
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
          <h3>Update profile info</h3>

          <input
            value={username}
            maxLength={50}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={400}
            className="input_content"
            type="text"
            placeholder="Tell us something about yourself..."
          />
          <input type="file" onChange={(e) => handleUpload(e)} />
          <div className="newpostButton_container">
            <Link className="forgotPasswordButton" to="/dashboard">
              Cancel
            </Link>
            <button
              disabled={loading}
              onClick={(e) => handleSubmit(e)}
              className="newpostButton"
            >
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddInfoProfile;
