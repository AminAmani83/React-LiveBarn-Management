import React from "react";

const SurfacesTab = (props) => {
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <tr className="table-dark" key={row}>
              <td>Name {row}</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurfacesTab;
