import React from "react";
import SearchBar from "./SearchBar";
import DetailsBox from "./DetailsBox";
import Tables from "./Tables";
import UseDataManagement from "./useDataManagement";

const DataTabPage = () => {
  const {
    isLoading,
    apiError,
    searchText,
    filteredSurfaceData,
    filteredServerData,
    selectedSurface,
    searchVenue,
    selectRow,
  } = UseDataManagement();

  const handleRowSelection = (e) => {
    selectRow(e.currentTarget.id);
  };

  const handleSearch = (e) => {
    searchVenue(e.target.value);
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
            selectedSurfaceId={selectedSurface.id}
            selectedServerId={selectedSurface.server.id}
            handleSelect={handleRowSelection}
          />
        </div>
        <div className="col-3">
          <DetailsBox selectedSurface={selectedSurface} />
        </div>
      </div>
    </>
  );
};

export default DataTabPage;
