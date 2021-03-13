import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ value, handleFieldChange }) => {
  return (
    <>
      <div className="bg-primary p-3">
        <form className="my-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <input
              className="form-control mr-sm-2"
              id="search-input"
              type="text"
              value={value}
              onChange={handleFieldChange}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
