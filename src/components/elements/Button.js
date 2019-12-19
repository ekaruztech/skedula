import React from "react";

const Button = props => {
  return (
    <button
      className={`btn-${props.color} border-0 rounded text-center btn-${props.size} ${props.style} ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
