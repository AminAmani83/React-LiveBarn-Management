import React, { useState } from "react";
import SearchBar from "./SearchBar";
import DetailsBox from "./DetailsBox";
import Tables from "./Tables";

const DataTabPage = ({ surfaceData, serverData }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
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
          <Tables surfaceData={surfaceData} serverData={serverData} />
        </div>
        <div className="col-3">
          <DetailsBox />
        </div>
      </div>
    </>
  );
};

export default DataTabPage;
