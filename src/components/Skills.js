import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="site-section skills" id="skills">
      <div className="text-center">
        <h1 className="mb-5 skills-heading" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
          <div className="line-skills me-3" data-aos="fade" data-aos-duration="1000" data-aos-delay="500"></div>
          Skills
          <div className="line-skills ms-3" data-aos="fade" data-aos-duration="1000" data-aos-delay="500"></div>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6" data-aos="fade" data-aos-duration="1000" data-aos-once="true">
            <div className="box frontend-skillset shadow-sm">
              <div class="py-5">
                <div className="icon-wrapper mb-5">
                  <FontAwesomeIcon className="skills-icon" icon={faLaptopCode} size="2x" />
                </div>
                <p class="skills-subtitle">Front-end</p>
                <p class="skills-text">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p class="skills-color-subtitle">Languages I speak:</p>
                <p class="skills-text">HTML, CSS, JS</p>
                <p class="skills-color-subtitle">Dev Tools:</p>
                <ul class="p-0">
                  <li class="skills-text">Bootstrap</li>
                  <li class="skills-text">React</li>
                  <li class="skills-text">GitHub</li>
                  <li class="skills-text">VS Code</li>
                  <li class="skills-text">Matialise</li>
                </ul>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-6" data-aos="fade" data-aos-duration="1000" data-aos-delay="250" data-aos-once="true">
            <div className="box backend-skillset shadow-sm">
              <div class="py-5">
                <div className="icon-wrapper mb-5">
                  <FontAwesomeIcon className="skills-icon" icon={faServer} size="2x" />
                </div>
                <p class="skills-subtitle">Back-end</p>
                <p class="skills-text">
                  I am always learning and I'm happy to do what it takes to get it done. <span className="invisible">Lorem ipsum dolor sit.</span>{" "}
                </p>
                <p class="skills-color-subtitle">Languages I speak:</p>
                <p class="skills-text">Python, JS</p>
                <p class="skills-color-subtitle">Dev Tools:</p>
                <ul class="p-0">
                  <li class="skills-text">Python</li>
                  <li class="skills-text">Django</li>
                  <li class="skills-text">MongoDB</li>
                  <li class="skills-text">MySQL</li>
                  <li class="skills-text">NoSQL</li>
                </ul>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-6" data-aos="fade" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            <div className="box design-skillset shadow-sm">
              <div class="py-5">
                <div className="icon-wrapper mb-5">
                  <FontAwesomeIcon className="skills-icon" icon={faPencilRuler} size="2x" />
                </div>
                <p class="skills-subtitle">Designer</p>
                <p class="skills-text">I value simple content structure, clean design and thoughtful interactions.</p>
                <p class="skills-color-subtitle">I enjoy designing:</p>
                <p class="skills-text">UI, Web, Mobile, Logos</p>
                <p class="skills-color-subtitle">Design Tools:</p>
                <ul class="p-0">
                  <li class="skills-text">Figma</li>
                  <li class="skills-text">Sketch</li>
                  <li class="skills-text">Pen &amp; Paper</li>
                  <li class="skills-text">Photoshop</li>
                  <li class="skills-text">Illustrator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
