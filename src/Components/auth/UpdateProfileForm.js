import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "../../register-login.css";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfileForm() {
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleUpdateProfile(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match.");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="register_container">
      <form onSubmit={handleUpdateProfile}>
        <div className="error_message_auth_box">
          <div className={`error_message_auth ${error ? "active_error" : ""}`}>
            {error}
          </div>
        </div>
        <div className="form_innercontainer">
          <h3>Update Profile</h3>
          <input
            required
            defaultValue={currentUser.email}
            type="email"
            ref={emailRef}
            placeholder="Email"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to keep the same"
          />
          <input
            type="password"
            ref={passwordConfirmRef}
            placeholder="Leave blank to keep the same"
          />

          <div className="registerButton_container">
            <div>
              <Link className="forgotPasswordButton" to="/dashboard">
                Cancel
              </Link>
            </div>
            <button disabled={loading} className="registerButton">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
