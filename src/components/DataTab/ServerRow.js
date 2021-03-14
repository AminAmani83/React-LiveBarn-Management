import React from "react";

const ServerRow = ({ row, handleSelect, isActive }) => (
  <tr
    className={`table-dark ${isActive ? " table-active" : ""}`}
    key={row.id}
    id={row.id}
    onClick={handleSelect}
  >
    <td>{row.ip4}</td>
    <td>{row.dns}</td>
  </tr>
);

export default ServerRow;
