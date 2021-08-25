import React from "react";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar-example2" aria-label="Eighth navbar example">
      <div className="container">
        <Link to="home" className="navbar-brand d-none d-sm-block" href="#">
          Julian Cameron
        </Link>
        <Link to="home" className="navbar-brand d-sm-none d-lg-none" href="#">
          JC
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="home" className="nav-link active" aria-current="page" href="#home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link" href="#about">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" className="nav-link" href="#skills">
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" className="nav-link" href="#portfolio">
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacts" className="nav-link" href="#contacts">
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
