import React from "react";

// LIBRARIES
import PropTypes from "prop-types";

// STYLE
import "./TitleAtom.scss";

const TitleAtom = (props) => {
  const { text = ""} = props;

  return (
    <div className={`component-title-container-atom`}>
      <span>{text}</span>
    </div>
  );
};

TitleAtom.propTypes = {
  text: PropTypes.string,

};

export default TitleAtom;
