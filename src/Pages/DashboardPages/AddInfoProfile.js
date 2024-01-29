import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { imgDB, postDB } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import "../../addInfoProfile.css";

const AddInfoProfile = () => {
  const { uid } = useParams();
  const { currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [bio, setBio] = useState("");
  const [img, setImg] = useState("");

  const [profilePageLink, setProfilePageLink] = useState("");

  useEffect(() => {
    if (currentUser) {
      setProfilePageLink(`/profile-page/${currentUser.uid}`);
    }
  }, [currentUser]);

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
    e.preventDefault();

    setError("");

    const valRefPosts = collection(postDB, "profiles");

    // Create a query to get only the document with the specified userId
    const q = query(valRefPosts, where("userId", "==", targetUid));

    const dataDb = await getDocs(q);

    if (dataDb.size > 0) {
      setError("Profile info already exists.");
      return;
    }

    if (!username) {
      setError("Please choose a username.");
      return;
    }

    if (!bio) {
      setError("Please write a bio.");
      return;
    }

    if (!img) {
      setError("Please choose an image.");
      return;
    }

    // If the function has not returned by this point, it means all checks passed
    const valRef = collection(postDB, "profiles");

    await addDoc(valRef, {
      username: username,
      imageUrl: img,
      bio: bio,
      userId: targetUid,
    });
    setMessage("Profile info uploaded!");
    setError("");
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
    <div className="addInfo_container">
      <form className="addInfo_form">
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

          <div className="upload_img">
            {!img ? (
              <>
                <span>Upload image</span>
                <input
                  className="upload_img_input"
                  type="file"
                  onChange={(e) => handleUpload(e)}
                />
              </>
            ) : (
              <p>File uploaded!</p>
            )}
          </div>
          <div className="addInfoButton_container">
            <Link className="forgotPasswordButton" to={profilePageLink}>
              {message ? "Back" : "Cancel"}
            </Link>
            <button
              disabled={loading}
              onClick={(e) => handleSubmit(e)}
              className="addInfoButton"
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
