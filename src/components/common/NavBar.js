import React from "react";

const NavBar = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <>
      <div className="row">
        {Object.keys(tabs).map((tabName) => (
          <div className="col-10 mb-3" key={tabName}>
            <button
              name={tabName}
              type="button"
              className={`btn btn-block btn-primary capitalized ${
                activeTab === tabName ? "active" : ""
              }`}
              onClick={handleTabClick}
            >
              {tabName}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
