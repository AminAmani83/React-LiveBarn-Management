import React from "react";
import PropTypes from "prop-types";

const ServerRow = ({ row, handleServerExtraction, isActive }) => {
  const handleClick = (e) => {
    handleServerExtraction(parseInt(e.currentTarget.id));
  };

  return (
    <tr
      className={`table-dark ${isActive ? " table-active" : ""}`}
      id={row.id}
      onClick={handleClick}
    >
      <td>{row.ip4}</td>
      <td>{row.dns}</td>
    </tr>
  );
};

ServerRow.propTypes = {
  row: PropTypes.object.isRequired,
  handleServerExtraction: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ServerRow;
