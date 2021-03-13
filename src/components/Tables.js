import React, { useState } from "react";
import SurfacesTab from "./SurfacesTab";
import ServersTab from "./ServersTab";

const Tables = (props) => {
  const tabs = { SURFACES: "SURFACES", SERVERS: "SERVERS" }; // Available Tabs (defined to avoid typos)
  const [activeTab, setActiveTab] = useState(tabs.SURFACES);

  const handleTabClick = (e) => {
    setActiveTab(e.target.getAttribute("name"));
  };

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

export default Tables;
