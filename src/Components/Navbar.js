import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const url = "http://localhost:3000/";
  window.addEventListener("DOMContentLoaded", NavController);
  function NavController() {
    if (document.URL === url) {
      window.addEventListener("scroll", navScroll);
    } else {
      document.getElementById("navigation").classList.add("navScroll");
    }
  }

  function navScroll() {
    if (window.scrollY >= 15) {
      document.getElementById("navigation").classList.add("navScroll");
    } else {
      document.getElementById("navigation").classList.remove("navScroll");
    }
  }
  return (
    <div>
      <Navbar light fixed="top" expand="md" className="navbar" id="navigation">
        <NavbarBrand href="/" className="navbarTitleBlock">
          <div className="navbarTitle">Bozok Üniversitesi</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navLinkBlock">
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" className="navLinks">
                  Ana Sayfa
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {" "}
                <Link to="*" className="navLinks">
                  ***
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {" "}
                <Link to="*" className="navLinks">
                  ***
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {" "}
                <Link to="*" className="navLinks">
                  ***
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
