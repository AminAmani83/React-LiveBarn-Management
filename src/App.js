import React, { useState } from "react";
import NavBar from "./components/common/NavBar";
import DataTabPage from "./components/DataTab/DataTabPage";
import EmptyTabPage from "./components/EmptyTab/EmptyTabPage";

function App() {
  const tabs = { EMPTY: "EMPTY", DATA: "DATA" }; // Available Tabs (defined to avoid typos)
  const [activeTab, setActiveTab] = useState(tabs.DATA);

  const handleTabClick = (e) => {
    setActiveTab(e.target.getAttribute("name"));
  };

  return (
    <>
      <div className="mt-4 mx-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 border-right">
              <NavBar
                tabs={tabs}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              />
            </div>
            <div className="col-11">
              {activeTab === tabs.DATA ? (
                <DataTabPage />
              ) : activeTab === tabs.EMPTY ? (
                <EmptyTabPage />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
