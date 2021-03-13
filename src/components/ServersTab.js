import React from "react";

const ServersTab = (props) => {
  return (
    <div className="mt-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">IP4</th>
            <th scope="col">DNS</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <tr className="table-dark" key={row}>
              <td>IP Address {row}</td>
              <td>Column content</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServersTab;
