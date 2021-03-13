import React from "react";

const ServersTab = ({ serverData }) => {
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
          {serverData.map((row) => (
            <tr className="table-dark" key={row.id} id={row.id}>
              <td>{row.ip4}</td>
              <td>{row.dns}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServersTab;
