import React from "react";

const InputField = props => {
  function handleChange(event) {
    props.onChange(event);
    props.onBlur(event);
  }
  return (
    <div className={`input-group mb-3 inputfield ${props.error}`}>
      <div className="input-group-text iconStyle">{props.icon}</div>
      <input
        className="form-control input w-70"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={e => handleChange(e)}
        onBlur={e => handleChange(e)}
      />
    </div>
  );
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;
