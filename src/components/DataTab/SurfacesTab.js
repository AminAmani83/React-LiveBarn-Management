import React from "react";
import PropTypes, { object } from "prop-types";
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

SurfacesTab.propTypes = {
  surfaceData: PropTypes.arrayOf(object).isRequired,
  selectSurface: PropTypes.func.isRequired,
  selectedSurfaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

const mapDispatchToProps = {
  selectSurface: updateSelectedSurface,
};

const mapStateToProps = (state) => {
  return {
    surfaceData: state.filteredSurfaces,
    selectedSurfaceId: state.userInput.selectedSurfaceId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurfacesTab);
