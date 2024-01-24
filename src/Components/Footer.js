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
        <Link to="/about" className="link-style">
          About
        </Link>
        <Link to="/about" className="link-style">
          About
        </Link>
        <Link to="/about" className="link-style">
          About
        </Link>
      </div>
      <div className="footer_container_rights">
        <p>&copy; 2024 All rights reserved InvictusDeus</p>
      </div>
    </footer>
  );
}
