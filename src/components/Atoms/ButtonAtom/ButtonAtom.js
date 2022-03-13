import React from "react";

// STYLES
import "./ButtonAtom.scss";

// LIBRARIES
import PropTypes from "prop-types";

const ButtonAtom = (props) => {
  const {
    name = "",
    icon = "",
    text = "",
    onClick = () => {},
    containerClassName = "",
  } = props;

  return (
    <div className={containerClassName}>
      <button className="default-button-atom"
       name={name}
       onClick={onClick}
      >
        {text || <img src={icon} alt="icon" />}
      </button>
    </div>
  );
};

ButtonAtom.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonAtom;
