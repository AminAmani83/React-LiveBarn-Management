import React from "react";
import PropTypes from "prop-types";
import NavButton from "./NavButton";

const NavBar = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <>
      <div className="row">
        {Object.keys(tabs).map((tabName) => (
          <div className="col-12 mb-3" key={tabName}>
            <NavButton
              tabName={tabName}
              isActive={activeTab === tabName}
              handleTabClick={handleTabClick}
            />
          </div>
        ))}
      </div>
    </>
  );
};

NavBar.propTypes = {
  tabs: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default NavBar;
