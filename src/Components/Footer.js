import { Link } from "react-router-dom";
import { NavTitle } from "./NavTitle";

export function Footer() {
  return (
    <footer className="footer_container container">
      <div className="footer_container_start">
        <NavTitle />
      </div>
      <div className="footer_container_links">
        <Link to="/" className="link-style">
          Home
        </Link>
        <Link to="/login" className="link-style">
          Login
        </Link>
        <Link to="/register" className="link-style">
          Register
        </Link>
        <Link to="/read" className="link-style">
          Read
        </Link>
      </div>
      <div className="footer_container_rights">
        <p>&copy; 2024 All rights reserved InvictusDeus</p>
      </div>
    </footer>
  );
}
