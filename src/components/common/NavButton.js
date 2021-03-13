import React from "react";

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

export default NavButton;
