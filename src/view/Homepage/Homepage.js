import React from "react";
import logo from "assets/icons/logo.png";
import button from "assets/icons/button.png";

// STYLES
import "./Homepage.scss";
import "./HomepageAnimation.scss";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS
import TitleAtom from "components/Atoms/TitleAtom/TitleAtom";
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";

const Homepage = () => {
  // PROPS

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
 
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  return (
    <div className="page-homepage-container">
         <div className="page-homepage-image-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className="page-home-intro-layer-1" />
      <div className="page-home-intro-layer-2">
        <div className="page-home-intro-layer-2-half-1" />
        <div className="page-home-intro-layer-2-half-2" />
      </div>
      <div className="page-home-intro-layer">
        <span>NICE TO MEET YOU!</span>
      </div>
   
      <TitleAtom text={"BUSINESS TECHNOLOGY THE WORLD CALLS FOR"} />
      <div className="page-homepage-text-wrapper">
        <p>
          <span>WTZ TECHNOLOGIES </span>
          builds software applications in all domains you need with our
          knowledge
        </p>
      </div>
      <div className="page-homepage-button-container">
        <p>Discover our vision</p>
        <ButtonAtom
          onClick={() => {}}
          icon={button}
          containerClassName={"page-homepage-button-wrapper"}
        />
      </div>
    </div>
  );
};

export default Homepage;
