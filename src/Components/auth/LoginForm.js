import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "../../register-login.css";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      navigate("/dashboard");
    } catch (error) {
      setError("Failed to log in.");
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
        <div className="form_innercontainer">
          <h3>Login</h3>
          <input type="email" ref={emailRef} placeholder="Email" />
          <input type="password" ref={passwordRef} placeholder="Password" />

          <div className="registerButton_container">
            <div>
              <Link className="switchBetweenLogin" to="/register">
                Need an account?
              </Link>
              <Link className="forgotPasswordButton" to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <button disabled={loading} className="registerButton">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
