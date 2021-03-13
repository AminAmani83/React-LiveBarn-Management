import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import DetailsBox from "./DetailsBox";
import Tables from "./Tables";

const DataTabPage = () => {
  const apiURL =
    "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project";

  const [surfaceData, setSurfaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredSurfaceData, setFilteredSurfaceData] = useState([]);
  const [filteredServerData, setFilteredServerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (response.ok) {
          const surfaces = await response.json();
          setSurfaceData(surfaces);
          setFilteredSurfaceData(surfaces);
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

  useEffect(() => {
    const uniqueServers = getUniqueServers(filteredSurfaceData);
    setFilteredServerData(uniqueServers);
  }, [filteredSurfaceData]);

  function getUniqueServers(surfaces) {
    const servers = surfaces.map((result) => result.server);
    const uniqueServers = servers.filter(
      (value, index, self) =>
        self.map((server) => server.id).indexOf(value.id) === index
    );
    return uniqueServers;
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setFilteredSurfaceData(findResults(e.target.value));
  };

  const findResults = (searchQuery) => {
    const query = new RegExp(searchQuery, "i"); // i : case insensitive
    const results = surfaceData.filter(
      (item) => query.test(item.venueName)
      // || query.test(item.surfaceName) // uncomment this to also search in surface names
    );

    return results;
  };

  if (apiError) {
    return <div className="h3 mt-5 text-center">{apiError.message}</div>;
  }

  if (isLoading) {
    return <div className="h3 mt-5 text-center">Loading...</div>;
  }

  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <SearchBar value={searchText} handleFieldChange={handleSearch} />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <Tables
            surfaceData={filteredSurfaceData}
            serverData={filteredServerData}
          />
        </div>
        <div className="col-3">
          <DetailsBox />
        </div>
      </div>
    </>
  );
};

export default DataTabPage;
