import React from "react";

const InputField = props => {
  function handleChange(event) {
    props.onChange(event);
  }
  return (
    <div className={`input-group mb-3 inputfield ${props.error}`}>
      <div className="input-group-text iconStyle">{props.icon}</div>
      <input
        className="form-control input w-80"
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
