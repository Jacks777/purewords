import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "../../register-login.css";
import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  const { resetPassword } = useAuth();
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your inbox.");
    } catch (error) {
      setError("Failed to send mail.");
    }
    setLoading(false);
  }

  return (
    <div className="register_container">
      <form onSubmit={handleLogin}>
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
          <h3>Password Reset</h3>
          <input type="email" ref={emailRef} placeholder="Email" />

          <div className="registerButton_container">
            <div>
              <Link className="switchBetweenLogin" to="/register">
                Register
              </Link>
              <Link className="switchBetweenLogin" to="/login">
                Log in
              </Link>
            </div>
            <button disabled={loading} className="registerButton">
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
