// @ts-nocheck
import styled from "styled-components";
import PropTypes from "prop-types";

// prettier-ignore
const InputContainer = styled.div`
  height: ${prop => prop.height}${prop => prop.sizeUnit};
  background: none;
  border: ${prop => prop.borderWidth}${prop => prop.sizeUnit} solid
    ${prop => prop.borderColor};
  border-radius: ${prop => prop.radius}${prop => prop.sizeUnit};
  display: grid;
  align-items: center;
  grid-area: ${prop => prop.gridArea};
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
 
  grid-template-areas: "s i i i i i i i i i i i";
  :focus-within,
  :focus-within > span {
    border-color: ${prop => prop.primaryColor};
  }
  :hover,
  :hover > span {
    border-color: ${prop => prop.primaryColor};
    transition: ${prop => prop.transition};
  }
  margin: 10px 0 10px 0;
`;

InputContainer.defaultProps = {
  height: 55,
  borderColor: "#B1B2B5",
  width: 400,
  radius: 3,
  sizeUnit: "px",
  sizeUnit2: "px",
  primaryColor: "#4786ff",
  borderWidth: 1.3,
  transition: "300ms ease-out",
  gridArea: "e"
};

InputContainer.PropTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  borderColor: PropTypes.string,
  sizeUnit: PropTypes.string,
  sizeUnit2: PropTypes.string,
  primaryColor: PropTypes.string,
  borderWidth: PropTypes.number
};

export default InputContainer;
