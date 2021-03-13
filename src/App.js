import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import DataTabPage from "./components/DataTabPage";
import EmptyTabPage from "./components/EmptyTabPage";

function App() {
  const tabs = { EMPTY: "EMPTY", DATA: "DATA" }; // Available Tabs (defined to avoid typos)
  const apiURL =
    "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project";

  const [activeTab, setActiveTab] = useState(tabs.DATA);
  const [surfaceData, setSurfaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (response.ok) {
          const surfaces = await response.json();
          setSurfaceData(surfaces);
          setIsLoading(false);
        } else {
          // in case of 403, 404 or...
          throw new Error("Error fetching data...");
        }
      } catch (error) {
        setApiError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []); // runs only once

  const handleTabClick = (e) => {
    setActiveTab(e.target.getAttribute("name"));
  };

  if (apiError) {
    return <div className="h3 mt-5 text-center">{apiError.message}</div>;
  }

  if (isLoading) {
    return <div className="h3 mt-5 text-center">Loading...</div>;
  }

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
                <DataTabPage surfaceData={surfaceData} />
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
