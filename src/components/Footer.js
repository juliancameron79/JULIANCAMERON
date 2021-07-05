import React from "react";
import cv from "../images/juliancameroncv.pdf";
import { TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5">
                <h2 className="footer-heading mb-4">Me</h2>
                <p>Julian Cameron | Full Stack Web Developer</p>
                <a href="tel:076-429-1257">
                  <p>+46(0)76-429-1257</p>
                </a>
                <p>juliancameron79@gmail.com</p>
              </div>
              <div className="col-md-3 ms-auto">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li className="footer-nav">
                    <Link to="home" className="footer-nav">
                      Home
                    </Link>
                  </li>
                  <li className="footer-nav">
                    <Link to="about" className="footer-nav">
                      About me
                    </Link>
                  </li>
                  <li className="footer-nav">
                    <Link to="skills" className="footer-nav">
                      Skills
                    </Link>
                  </li>
                  <li className="footer-nav">
                    <Link to="portfolio" className="footer-nav">
                      Portfolio
                    </Link>
                  </li>
                  <li className="footer-nav">
                    <Link to="contacts" className="footer-nav">
                      Contact me
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Follow Me</h2>
                <div className="mb-3">
                  <TwitterShareButton url={"https://twitter.com/JulianCameron79"} quote={"Full Stack Web Developer"} hashtag="#fullstack">
                    <TwitterIcon className="me-3" size={36}></TwitterIcon>
                  </TwitterShareButton>
                  <LinkedinShareButton url={"https://www.linkedin.com/in/julian-cameron/"} quote={"Full Stack Web Developer"} hashtag="#fullstack">
                    <LinkedinIcon className="mx-3 " size={36}></LinkedinIcon>
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading mb-4">Download My CV</h2>
            <p>
              Need a printable version of my CV? <br />
              Download it here.{" "}
              <a href={cv} target="_blank">
                <FontAwesomeIcon className="text-white" icon={faDownload} size="1x" />
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="border-top pt-3">
              <p class="mb-0 text-center">
                <small>
                  Copyright&copy;
                  {new Date().getFullYear()}&nbsp;Julian Cameron | All Rights Reserved
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
