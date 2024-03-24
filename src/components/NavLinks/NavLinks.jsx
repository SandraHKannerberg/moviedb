import "./NavLinks.css";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavLinks() {
  // return (
  //   <>
  //     {["md"].map((expand, index) => (
  //       <Navbar
  //         expand={expand}
  //         className="mb-3"
  //         style={{
  //           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  //           backgroundColor: "white",
  //           color: "blue",
  //         }}
  //         key={index}
  //       >
  //         <Container fluid>
  //           <Navbar.Toggle
  //             aria-controls={`offcanvasNavbar-expand-${expand}`}
  //             onClick={() => setShowOffcanvas(!showOffcanvas)}
  //           />
  //           <Navbar.Offcanvas
  //             show={showOffcanvas}
  //             onHide={handleCloseOffcanvas}
  //             id={`offcanvasNavbar-expand-${expand}`}
  //             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
  //             placement="start"
  //           >
  //             <Offcanvas.Header closeButton>
  //               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
  //                 Menu
  //               </Offcanvas.Title>
  //             </Offcanvas.Header>
  //             <Offcanvas.Body className="d-flex justify-content-center">
  //               <Nav className="gap-md-3 gap-lg-4 gap-xl-5">
  //                 <NavLink to="/">
  //                   <li>Movies</li>
  //                 </NavLink>
  //                 <NavLink to="/about">
  //                   <li>About</li>
  //                 </NavLink>
  //                 <NavLink to="/contact">
  //                   <li>Contact</li>
  //                 </NavLink>
  //               </Nav>
  //             </Offcanvas.Body>
  //           </Navbar.Offcanvas>
  //         </Container>
  //       </Navbar>
  //     ))}
  //   </>
  // );

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
      {/* <button className="hamburger-btn">&#9776;</button> */}
    </nav>
  );
}

export default NavLinks;
