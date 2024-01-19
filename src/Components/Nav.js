import { Link } from "react-router-dom";
import { NavTitle } from "./NavTitle";

export function Nav() {
  return (
    <nav>
      <div className="nav_container container">
        <NavTitle />
        <div className="nav_navigation">
          <Link to="/read" className="nav_navigation_links">
            Read
          </Link>
          <Link to="/#" className="nav_navigation_links">
            Link2
          </Link>
          <Link to="/#" className="nav_navigation_links">
            Link3
          </Link>
        </div>
      </div>
    </nav>
  );
}
