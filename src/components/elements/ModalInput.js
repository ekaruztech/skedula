import React from "react";

const InputField = props => {
  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <div className="input-group mb-3">
      <input
        className="form-control input w-80 border"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;
