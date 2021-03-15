import React from "react";
import PropTypes from "prop-types";

const NavButton = ({ tabName, isActive, handleTabClick }) => (
  <button
    name={tabName}
    type="button"
    className={`btn btn-block btn-primary capitalized ${
      isActive ? "active" : ""
    }`}
    onClick={handleTabClick}
  >
    {tabName}
  </button>
);

NavButton.propTypes = {
  tabName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default NavButton;
