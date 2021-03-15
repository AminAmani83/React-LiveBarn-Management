import React, { useState } from "react";
import PropTypes from "prop-types";
import SurfacesTab from "./SurfacesTab";
import ServersTab from "./ServersTab";
import Spinner from "../common/Spinner";

const Tables = ({ loading, error }) => {
  const tabs = { SURFACES: "SURFACES", SERVERS: "SERVERS" }; // Available Tabs (defined to avoid typos)
  const [activeTab, setActiveTab] = useState(tabs.SURFACES);

  const handleTabClick = (e) => {
    setActiveTab(e.target.getAttribute("name"));
  };

  if (loading) {
    return <Spinner />;
  }

  if (error.onLoad) {
    return (
      <div className="text-center mt-3">
        <div className="h3 mt-5 text-center">{error.onLoad}</div>
      </div>
    );
  }

  return (
    <div>
      <ul className="nav nav-tabs">
        {Object.keys(tabs).map((tabName) => (
          <li className="nav-item capitalized" key={tabName}>
            <span
              name={tabName}
              onClick={handleTabClick}
              className={
                "nav-link mouse-pointer" +
                (activeTab === tabName ? " active" : "")
              }
            >
              {tabName}
            </span>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade active show">
          {activeTab === tabs.SURFACES ? (
            <SurfacesTab />
          ) : activeTab === tabs.SERVERS ? (
            <ServersTab />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

Tables.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
};

export default Tables;
