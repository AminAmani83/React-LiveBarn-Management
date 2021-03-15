import React from "react";
import { connect } from "react-redux";
import { updateSelectedSurface } from "../../Redux/actions/selectionActions";

const SurfacesTab = ({ surfaceData, selectSurface, selectedSurfaceId }) => {
  const handleSurfaceSelection = (e) => {
    selectSurface(parseInt(e.currentTarget.id));
  };

  return (
    <div className="mt-4">
      <table className="table table-hover">
        <thead className="table-secondary">
          <tr>
            <th scope="col">Venue Name</th>
            <th scope="col">Surface Name</th>
            <th scope="col">Sport</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {surfaceData.map((row) => (
            <tr
              className={`table-dark ${
                selectedSurfaceId === row.id ? " table-active" : ""
              }`}
              key={row.id}
              id={row.id}
              onClick={handleSurfaceSelection}
            >
              <td>{row.venueName}</td>
              <td>{row.surfaceName}</td>
              <td>{row.sport}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">Matched: {surfaceData.length}</div>
    </div>
  );
};

const mapDispatchToProps = {
  selectSurface: updateSelectedSurface,
};

const mapStateToProps = (state) => {
  return {
    surfaceData: state.filteredSurfaces,
    selectedSurfaceId: state.selections.selectedSurfaceId,
    loading: state.pendingApiCallsCount > 0, // number of ongoing API calls
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurfacesTab);
