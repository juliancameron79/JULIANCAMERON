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
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="300">
                  J
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="400">
                  u
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="500">
                  n
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="600">
                  i
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="700">
                  o
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="800">
                  r
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="900">
                  {" "}
                  F
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1000">
                  u
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1100">
                  l
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1200">
                  l
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1300">
                  {" "}
                  S
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1400">
                  t
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1500">
                  a
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1600">
                  c
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1700">
                  k
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1800">
                  {" "}
                  W
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="1900">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2000">
                  b
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2100">
                  {" "}
                  D
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2200">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2300">
                  v
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2400">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2500">
                  l
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2600">
                  o
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2700">
                  p
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2800">
                  e
                </span>
                <span data-aos="fade" data-aos-easing="ease-in-back" data-aos-delay="2900">
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
