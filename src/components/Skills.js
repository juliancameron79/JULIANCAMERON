import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="py-5 skills-heading" data-aos="fade-right" data-aos-duration="1000">
        Skills
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="box frontend-skillset shadow-sm">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="skills-icon" icon={faLaptopCode} size="2x" />
              </div>
              <div class="py-5 px-4">
                <p class="skills-subtitle">Front-end</p>
                <p class="skills-text">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p class="skills-color-subtitle">Languages I speak:</p>
                <p class="skills-text">HTML, CSS, JS, Sass</p>
                <p class="skills-color-subtitle">Dev Tools:</p>
                <ul class="p-0">
                  <li class="skills-text">Bootstrap</li>
                  <li class="skills-text">Git</li>
                  <li class="skills-text">GitHub</li>
                  <li class="skills-text">VS Code</li>
                  <li class="skills-text">Matialise</li>
                </ul>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-6">
            <div className="box backend-skillset shadow-sm">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="skills-icon" icon={faServer} size="2x" />
              </div>
              <div class="py-5 px-4">
                <p class="skills-subtitle">Back-end</p>
                <p class="skills-text">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p class="skills-color-subtitle">Languages I speak:</p>
                <p class="skills-text">HTML, CSS, JS, Sass</p>
                <p class="skills-color-subtitle">Dev Tools:</p>
                <ul class="p-0">
                  <li class="skills-text">Bootstrap</li>
                  <li class="skills-text">Git</li>
                  <li class="skills-text">GitHub</li>
                  <li class="skills-text">VS Code</li>
                  <li class="skills-text">Matialise</li>
                </ul>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-6">
            <div className="box design-skillset shadow-sm">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="skills-icon" icon={faPencilRuler} size="2x" />
              </div>
              <div class="py-5 px-4">
                <p class="skills-subtitle">Designer</p>
                <p class="skills-text">I value simple content structure, clean design and thoughtful interactions.</p>
                <p class="skills-color-subtitle">I enjoy designing:</p>
                <p class="skills-text">UX, UI, Web, Mobile, Logos</p>
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
