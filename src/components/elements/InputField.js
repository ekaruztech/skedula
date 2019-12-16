import React, { useState } from "react";

const InputField = props => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        className="form-control "
        placeholder={props.placeholder}
      />
    </>
  );
};
export default InputField;
