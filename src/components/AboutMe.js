import React from "react";
import author from "../julian-cameron.jpg";

const AboutMe = () => {
  return (
    <section className="site-section" id="about">
      <h1 className="portfolio-heading text-center mb-5" data-aos="fade-right" data-aos-duration="1000">
        <div className="line-about-me me-3" data-aos="fade-right" data-aos-duration="1000"></div>
        About Me
        <div className="line-about-me ms-3" data-aos="fade-right" data-aos-duration="1000"></div>
      </h1>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="photo-wrapper mb-5" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <img className="profile-img" src={author} alt="Julian Cameron" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12" data-aos="fade" data-aos-delay="100" data-aos-duration="3000" data-aos-once="true">
            <p className="about-title">Hi, I’m Julian. Nice to meet you.</p>
            <p className="about-text">I’m a recently qualified Full Stack Web Developer living in Viksjö. I enjoy working with and adapting to technologies as they develop. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
            <p className="about-text"> Before starting my journey as a developer, I spent nearly 12 years in the corporate enviroment successfully managering and running many onsite and offsite projects for large and small firms from across the globe. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
