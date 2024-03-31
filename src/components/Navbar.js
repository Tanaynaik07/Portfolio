// Navbar.js

import React from "react";
import "../components/navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
