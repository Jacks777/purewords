import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "../../register-login.css";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch (error) {
      setError("Failed to sign up.");
    }
    setLoading(false);
  }

  return (
    <div className="register_container">
      <form onSubmit={handleRegister}>
        <div className="error_message_auth_box">
          <div className={`error_message_auth ${error ? "active_error" : ""}`}>
            {error}
          </div>
        </div>

        <div className="form_innercontainer">
          <h3>Register</h3>

          <input type="email" ref={emailRef} placeholder="Email" />
          <input type="password" ref={passwordRef} placeholder="Password" />
          <input
            type="password"
            ref={passwordConfirmRef}
            placeholder="Confirm password"
          />
          <div className="registerButton_container">
            <Link className="switchBetweenLogin" to="/login">
              Already have an account?
            </Link>
            <button disabled={loading} className="registerButton">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
