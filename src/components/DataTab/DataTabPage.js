import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import DetailsBox from "./DetailsBox";
import Tables from "./Tables";
import { connect } from "react-redux";
import { loadAllSurfaceServers } from "../../Redux/actions/allSurfaceServerActions";

const DataTabPage = ({ loading, loadData }) => {
  const [error, setError] = useState({});
  // API CALL
  useEffect(() => {
    loadData().catch((error) => {
      setError({ onLoad: error.message });
    });
  }, [loadData]); // runs only once

  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <SearchBar loading={loading} />
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <Tables loading={loading} error={error} />
        </div>
        <div className="col-3">
          <DetailsBox />
        </div>
      </div>
    </>
  );
};

DataTabPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: state.apiCallInProgress,
  };
};

const mapDispatchToProps = {
  loadData: loadAllSurfaceServers,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTabPage);
