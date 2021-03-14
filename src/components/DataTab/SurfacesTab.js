import React from "react";

const SurfacesTab = ({
  surfaceData,
  selectedSurfaceId,
  handleSurfaceSelection,
}) => {
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

export default SurfacesTab;
