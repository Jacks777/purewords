import { Link } from "react-router-dom";

export function NavTitle() {
  return (
    <Link to="/" className="nav_title">
      <img src="./assets/pigeon.svg" alt="pigeon svg" className="pigeon_svg" />
      <p className="title_text">InvictusDeus</p>
    </Link>
  );
}
