import "./NavLinks.css";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Movies</li>
        </NavLink>

        <NavLink to="/about">
          <li>About</li>
        </NavLink>

        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavLinks;
