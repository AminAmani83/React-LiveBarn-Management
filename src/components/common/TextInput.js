import React from "react";

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

export default TextInput;
