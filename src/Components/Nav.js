import { Link } from "react-router-dom";
import { NavTitle } from "./NavTitle";

import { NavTitleTop } from "./NavTitleTop";

export function Nav() {
  return (
    <nav>
      <div className="nav_container container">
        <NavTitleTop />
        <div className="nav_navigation">
          <Link to="/read" className="nav_navigation_links">
            Read
          </Link>
          <Link to="/search" className="nav_navigation_links">
            Search
          </Link>
          <Link to="/login" className="nav_navigation_links">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
