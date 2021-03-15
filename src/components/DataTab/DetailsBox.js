import React from "react";
import { connect } from "react-redux";

const DetailsBox = ({ selectedSurface }) => (
  <>
    <div className="card border-secondary mb-3 position-sticky sticky-top details-box">
      <div className="card-header">Details</div>
      <div className="card-body">
        <h5 className="card-title">Venue Name:</h5>
        <p className="card-text pb-3">{selectedSurface?.venueName}</p>
        <h5 className="card-title">Surface Name:</h5>
        <p className="card-text pb-3">{selectedSurface?.surfaceName}</p>
        <h5 className="card-title">Sport:</h5>
        <p className="card-text pb-3">{selectedSurface?.sport}</p>
        <h5 className="card-title">Status:</h5>
        <p className="card-text pb-3">{selectedSurface?.status}</p>
        <h5 className="card-title">Server IP:</h5>
        <p className="card-text pb-3">{selectedSurface?.server?.ip4}</p>
      </div>
    </div>
  </>
);

const mapStateToProps = (state) => {
  return {
    selectedSurface: state.allSurfacesAndServers.find(
      (s) => s.id === state.selections.selectedSurfaceId
    ),
  };
};

export default connect(mapStateToProps)(DetailsBox);
