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
          <Link to="/prayers" className="nav_navigation_links">
            Prayers
          </Link>
          <Link to="/dashboard" className="nav_navigation_links">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
