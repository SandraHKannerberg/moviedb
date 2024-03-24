import NavLinks from "../NavLinks/NavLinks";
import SeenMovies from "../SeenMovies/SeenMovies";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>
          Movie<span>DB</span>
        </h1>
      </Link>

      <div>
        <NavLinks />
        <SeenMovies />
      </div>
    </header>
  );
}

export default Header;
