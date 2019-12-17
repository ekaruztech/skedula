import React, { useState } from "react";

const InputField = props => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <div className="input-group mb-3">
      <input
        className="form-control p-1 border"
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
