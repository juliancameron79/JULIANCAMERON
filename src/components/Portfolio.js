import React from "react";
import recipeHeaven from "../images/recipe-heaven.png";
import milestoneFloristry from "../images/milestone-floristry.png";
import evcn from "../images/evcn.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Recipe Heaven
  const openPopupboxRecipeHeaven = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={recipeHeaven} alt="A Milestone Floristry project..." />
        <p className="mt-3">This full-stack site allows users to manage a common dataset about a particular domain</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link text-break" onClick={() => window.open("https://recipe-heaven-cookbook.herokuapp.com/", "_blank")}>
          https://recipe-heaven-cookbook.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link text-break" onClick={() => window.open("https://github.com/juliancameron79/recipe-heaven", "_blank")}>
          https://github.com/juliancameron79/recipe-heaven
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "A recipe cook book project.",
        },
      },
    });
  };

  const popupConfigRecipeHeaven = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // MILESTONE FLORISTRY
  const openPopupboxMilestoneFloristry = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={milestoneFloristry} alt="A Milestone Floristry project..." />
        <p className="mt-3">A full-stack site based around business logic used to control a centrally-owned dataset.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link text-break" onClick={() => window.open("https://milestone-floristry.herokuapp.com/", "_blank")}>
          https://milestone-floristry.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link text-break" onClick={() => window.open("https://github.com/juliancameron79/milestone-floristry", "_blank")}>
          https://github.com/juliancameron79/milestone-floristry
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "A Milestone Floristry project.",
        },
      },
    });
  };

  const popupConfigMilestoneFloristry = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // EVCN
  const openPopupboxEvcn = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={evcn} alt="A google maps API project..." />
        <p className="mt-3">This site calls on the google Maps API and or Google Places API to allow users to locate services in their immediate area.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link text-break" onClick={() => window.open("https://juliancameron79.github.io/evc-network/", "_blank")}>
          https://juliancameron79.github.io/evc-network/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link text-break" onClick={() => window.open("https://github.com/juliancameron79/evc-network", "_blank")}>
          https://github.com/juliancameron79/evc-network
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "A EVC Network project",
        },
      },
    });
  };

  const popupConfigEvcn = {
    titleBar: {
      enable: true,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="portfolio-heading text-center py-5" data-aos="fade-right" data-aos-duration="1000">
          Portfolio
        </h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center text-center">
          <div className="col-md-4 col-12 mb-4">
            <div className="portfolio-image-box" onClick={openPopupboxRecipeHeaven}>
              <img className="portfolio-image shadow-sm" src={recipeHeaven} alt="Food Recipe Site" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-12 mb-4">
            <div className="portfolio-image-box" onClick={openPopupboxMilestoneFloristry}>
              <img className="portfolio-image shadow-sm" src={milestoneFloristry} alt="E-commerce floral Site" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-12 ">
            <div className="portfolio-image-box" onClick={openPopupboxEvcn}>
              <img className="portfolio-image  shadow-sm" src={evcn} alt="Electric Vehicle Charging Network Site" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupConfigEvcn} />
      <PopupboxContainer {...popupConfigMilestoneFloristry} />
      <PopupboxContainer {...popupConfigRecipeHeaven} />
    </div>
  );
};

export default Portfolio;
