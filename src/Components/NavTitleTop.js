import { Link } from "react-router-dom";

export function NavTitleTop() {
  return (
    <Link to="/" className="nav_title">
      <img
        src="./assets/pigeon_dark.svg"
        alt="pigeon dark svg"
        className="pigeon_svg"
      />
      <p className="title_text title_text_dark">PureWords</p>
    </Link>
  );
}
