import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="overlay"></div>
      <div className="main-info">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-10 col-12 px-4">
              <h1 className="display-2 text-white" span data-aos="fade" data-aos-easing="ease-in" data-aos-delay="100">
                Julian Cameron
              </h1>
              <div className="display-6 text-white">
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="200">
                  Junior{" "}
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="300">
                  F
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="400">
                  u
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="500">
                  l
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="600">
                  l
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="700">
                  {" "}
                  S
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="800">
                  t
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="900">
                  a
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1000">
                  c
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1100">
                  k
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1200">
                  {" "}
                  W
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1300">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1400">
                  b
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1500">
                  {" "}
                  D
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1600">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1700">
                  v
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1800">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1900">
                  l
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2000">
                  o
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2100">
                  p
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2200">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2300">
                  r
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
