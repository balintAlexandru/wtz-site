import React, { useState, useEffect } from "react";

// STYLES
import "./Homepage.scss";
import button from "assets/icons/button.svg";

// LIBRARIES
import {
  DesktopScreenWidth,
  MobileScreenWidth,
  TabletScreenWidth,
} from "helpers/screenSize";

// CONSTANTS & MOCKS
import { findElementPosition } from "./homepageConfig/findElementPosition";

// COMPONENTS
import Technologies from "view/Homepage/Components/Technologies/Technologies";
import ActivityFields from "components/ActivityFields/ActivityFields";
import Footer from "../Footer/Footer";
import IntroHomepageAnimation from "./Components/IntroHomepageAnimation/IntroHomepageAnimation";
import CircuitAnimation from "./Components/CircuitAnimation/CircuitAnimation";
import LoadingAnimation from "./Components/LoadingAnimation/LoadingAnimation";
import MeetOurTeam from "./Components/MeetOurTeam/MeetOurTeam";
import Contact from "view/Contact/Contact";
import ButtonAtom from "components/Atoms/ButtonAtom/ButtonAtom";
import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";
import ContactMobile from "../ContactMobile/ContactMobile";

const Homepage = () => {
  // PROPS

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const [data, setData] = useState({
    nameClass: {
      name: "disable-scroll",
    },
    displayIntroAnimation: {
      value: true,
    },
    scrollToElement: {
      value: 1,
    },
  });

  // GENERAL CONSTANTS
  const scrollToSection = (elementId) => {
    const anchor = document.getElementById(elementId);
    anchor.scrollIntoView({ behavior: "smooth" });
  };

  // USE EFFECT FUNCTION
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const elementPosition = window.scrollY;
      if (elementPosition < 14440) {
        setData((data) => ({
          ...data,
          scrollToElement: {
            ...data.scrollToElement,
            value: findElementPosition(elementPosition),
          },
        }));
      }
    });

    setTimeout(() => {
      setData((data) => ({
        ...data,
        displayIntroAnimation: {
          ...data.displayIntroAnimation,
          value: false,
        },
      }));
    }, 2000);

    setTimeout(() => {
      setData((data) => ({
        ...data,
        nameClass: {
          ...data.nameClass,
          name: "enable-scroll",
        },
      }));
    }, 7200);
  }, [data.scrollToElement.value]);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <div className={`page-homepage-container ${data.nameClass.name}`}>
      <section id="0" className="page-homepage-intro-animation-wrapper">
        {data.displayIntroAnimation.value && <LoadingAnimation />}
        {!data.displayIntroAnimation.value && <IntroHomepageAnimation />}
      </section>

      <section id="1" className="page-homepage-technologies-container">
        <Technologies />
      </section>
      
      <section id="2" className="page-homepage-circuit-animation-wrapper">
        <CircuitAnimation />
      </section>

      <section id="3" className="page-homepage-activity-fields-container">
        <ActivityFields />
      </section>

      <section id="4" className="page-homepage-meet-our-team-wrapper">
        <MeetOurTeam />
      </section>

      <MobileScreenWidth>
        <div className="page-homepage-mobile-contact-wrapper">
          <ContactMobile />
        </div>
      </MobileScreenWidth>
      <TabletScreenWidth>
        <div id="5" className="page-homepage-mobile-contact-wrapper">
          <ContactMobile />
        </div>
      </TabletScreenWidth>
      <DesktopScreenWidth>
        <div id="5" className="page-homepage-contact-wrapper">
          <Contact />
        </div>
      </DesktopScreenWidth>

      <div className="page-homepage-footer-wrapper">
        <Footer />
      </div>
      <div className="page-homepage-menu-button">
        {data.nameClass.name === "enable-scroll" && (
          <ButtonAtom
            icon={button}
            onClick={() => {
              scrollToSection(data.scrollToElement.value);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;

  
  
  
  
  
  
  const findElementPosition = (elementId) => {
  //console.log("elementId>>",elementId);

  switch (true) {
    case elementId >= 0 && elementId <= 700:
      return 1;
      break;
    case elementId >= 989 && elementId <= 5000:
      return 2;
      break;
    case elementId >= 6100 && elementId <= 7400:
      return 3;
      break;
    case elementId >= 7400 && elementId <= 13400:
      return 4;
      break;
    case elementId >= 13400 && elementId <= 15300:
      return 5;
      break;
    default:
      break;
  }
};

export { findElementPosition };
