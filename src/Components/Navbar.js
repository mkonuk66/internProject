import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
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
            <img src="./images/logo_yazi.png" alt="navLogo" id="navLogo" />
          </a>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navLinkBlock">
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink>
                <a href="/" className="navLinks">
                  Ana Sayfa
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  Üniversitemiz
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  Akademik
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  Birimler
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  Öğrenci
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  E-Hizmetler
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  Uluslararası
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  Hızlı Erişim
                </a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="*" className="navLinks">
                  İletişim
                </a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
