import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

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
    if (window.scrollY >= 100) {
      document.getElementById("navigation").classList.add("navScroll");
    } else {
      document.getElementById("navigation").classList.remove("navScroll");
    }
  }
  return (
    <div>
      <Navbar light fixed="top" expand="md" className="navbar" id="navigation">
        <div className="navbarHamburger">
          <a href="/">
            <img src="/images/logo_yazi.png" alt="navLogo" id="navLogo" />
          </a>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navLinkBlock">
          <Nav
            className="m-auto d-flex justify-content-center align-items-center"
            navbar
          >
            <NavItem>
              <NavLink href="/" className="navLinks" style={{ color: "#fff" }}>
                Ana Sayfa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/university"
                className="navLinks"
                style={{ color: "#fff" }}
              >
                Üniversitemiz
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/academic"
                className="navLinks"
                style={{ color: "#fff" }}
              >
                Akademik
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/student"
                className="navLinks"
                style={{ color: "#fff" }}
              >
                Öğrenci
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://bozok.edu.tr/uluslararasi"
                className="navLinks"
                style={{ color: "#fff" }}
              >
                Uluslararası
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/contact"
                className="navLinks"
                style={{ color: "#fff" }}
              >
                İletişim
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
