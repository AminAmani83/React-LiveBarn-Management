import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  name,
  value,
  disabled,
  handleFieldChange,
  placeholder = "",
}) => {
  return (
    <>
      <input
        type="text"
        className="form-control mr-sm-2"
        name={name}
        id={name}
        value={value || ""}
        disabled={disabled}
        onChange={handleFieldChange}
        placeholder={placeholder}
      />
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextInput;
