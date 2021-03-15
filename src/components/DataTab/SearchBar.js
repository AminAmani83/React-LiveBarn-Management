import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { updateSearchTerm } from "../../Redux/actions/selectionActions";

const SearchBar = ({ searchText, setSearchText, loading }) => {
  const handleFieldChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh if user presses Enter
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    searchText: state.userInput.searchTerm,
  };
};

const mapDispatchToProps = {
  setSearchText: updateSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
