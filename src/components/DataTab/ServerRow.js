import React from "react";
import PropTypes from "prop-types";

const ServerRow = ({ row, handleServerSelect, isActive }) => (
  <tr
    className={`table-dark ${isActive ? " table-active" : ""}`}
    id={row.id}
    onClick={handleServerSelect}
  >
    <td>{row.ip4}</td>
    <td>{row.dns}</td>
  </tr>
);

ServerRow.propTypes = {
  row: PropTypes.object.isRequired,
  handleServerSelect: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ServerRow;
