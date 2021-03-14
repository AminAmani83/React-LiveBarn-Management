import React from "react";
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

export default NavBar;
