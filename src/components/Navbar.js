import React from "react";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blur fixed-top" id="navbar-example2" aria-label="Eighth navbar example">
      <div className="container">
        <a className="navbar-brand d-none d-sm-block" href="#">
          Julian Cameron
        </a>
        <a className="navbar-brand d-sm-none d-lg-none" href="#">
          JC
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">
                contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
