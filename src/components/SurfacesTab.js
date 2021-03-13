import React from "react";

const SurfacesTab = ({ surfaceData }) => {
  return (
    <div className="mt-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Venue Name</th>
            <th scope="col">Surface Name</th>
            <th scope="col">Sport</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {surfaceData.map((row) => (
            <tr className="table-dark" key={row.id} id={row.id}>
              <td>{row.venueName}</td>
              <td>{row.surfaceName}</td>
              <td>{row.sport}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurfacesTab;
