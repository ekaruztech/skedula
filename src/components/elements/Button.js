import React, { useState } from "react";

const Button = props => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [style] = useState(props.style);
  return (
    <button
      className={`btn-${variant} border-0 text-center ml-5 btn-${size} ${style}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
