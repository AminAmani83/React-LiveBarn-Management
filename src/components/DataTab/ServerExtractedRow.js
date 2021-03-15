import React from "react";
import PropTypes, { object } from "prop-types";

const ServerExtractedRow = ({
  isDisplayed,
  extractedSurfaceData,
  selectedSurfaceId,
  handleSurfaceSelection,
}) => {
  const handleSurfaceSelect = (e) => {
    handleSurfaceSelection(parseInt(e.currentTarget.id));
  };
  if (!isDisplayed) return null;
  return (
    <tr className="extracted-row">
      <td colSpan="2">
        <div className="mt-4 px-5">
          <p>Num Surfaces: {extractedSurfaceData.length}</p>
          <table className="table table-hover">
            <thead className="table-secondary">
              <tr>
                <th scope="col">Venue</th>
                <th scope="col">Surface</th>
                <th scope="col">Sport</th>
              </tr>
            </thead>
            <tbody>
              {extractedSurfaceData.map((row) => (
                <tr
                  className={`table-dark ${
                    selectedSurfaceId === row.id ? " table-active" : ""
                  }`}
                  key={row.id}
                  id={row.id}
                  onClick={handleSurfaceSelect}
                >
                  <td>{row.venueName}</td>
                  <td>{row.surfaceName}</td>
                  <td>{row.sport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
};

ServerExtractedRow.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  extractedSurfaceData: PropTypes.arrayOf(object).isRequired,
  selectedSurfaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleSurfaceSelection: PropTypes.func.isRequired,
};

export default ServerExtractedRow;
