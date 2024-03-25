import NavLinks from "../NavLinks/NavLinks";
import SeenMovies from "../SeenMovies/SeenMovies";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div className="menu">
        <Link to="/">
          <h1 className="logotype">
            Movie<span>DB</span>
          </h1>
        </Link>

        <div className="right-content">
          <NavLinks />
        </div>
      </div>

      <button className="hamburger-btn" onClick={handleShow}>
        &#9776;
      </button>
      <SeenMovies />
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{
          backgroundColor: "rgb(48, 47, 66)",
          color: "rgb(235, 235, 235)",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to="/">
              <h1 className="logotype">
                Movie<span>DB</span>
              </h1>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLinks />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
