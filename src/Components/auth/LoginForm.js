import React from "react";

import "../../register-login.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="register_container">
      <form>
        <div className="form_innercontainer">
          <h3>Login</h3>
          <input type="name" name="name" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <div className="registerButton_container">
            <Link className="switchBetweenLogin" to="/register">
              Or register here
            </Link>
            <button className="registerButton">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
