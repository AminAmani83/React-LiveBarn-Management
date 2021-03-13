import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import DetailsBox from "./DetailsBox";
import Tables from "./Tables";

const DataTabPage = ({ surfaceData }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredSurfaceData, setFilteredSurfaceData] = useState(surfaceData);
  const [filteredServerData, setFilteredServerData] = useState([]);

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
