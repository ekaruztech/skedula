import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  color: ${prop => prop.color};
  padding: 0.25em 1em;
  border: ${prop => prop.border};
  border-radius: 3px;
  display: flex;
`;

Button.defaultProps = {
  color: "white",
  background: "#4786ff",
  border: "none"
};
export default Button;
