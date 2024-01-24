import React from "react";

import "../../register-login.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="register_container">
      <form>
        <div className="form_innercontainer">
          <h3>Register</h3>
          <input type="name" name="name" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm password"
          />
          <div className="registerButton_container">
            <Link className="switchBetweenLogin" to="/login">
              Or Login here
            </Link>
            <button className="registerButton">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
