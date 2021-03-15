import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { updateFilteredSurfaces } from "../../Redux/actions/filteredSurfaceActions";
import TextInput from "../common/TextInput";

const SearchBar = ({ searchSurfaces, loading }) => {
  const [searchText, setSearchText] = useState(""); // Value entered in SearchBar

  const handleFieldChange = (e) => {
    const searchQuery = e.target.value;
    setSearchText(searchQuery);
    searchSurfaces(searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-primary p-3">
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <TextInput
              name="search-input"
              value={searchText}
              handleFieldChange={handleFieldChange}
              placeholder="Search"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  searchSurfaces: updateFilteredSurfaces,
};

export default connect(null, mapDispatchToProps)(SearchBar);
