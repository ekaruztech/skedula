import styled from "styled-components";
import PropTypes from "prop-types";

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  background-color: #ffffff;
  grid-template-rows: ${prop => prop.gridRows};
  margin: ${prop => prop.margin};
`;

FormContainer.defaultProps = {
  gridRows: "repeat(3, 1fr)",
  margin: "30px"
};

FormContainer.PropTypes = {
  gridRows: PropTypes.string,
  margin: PropTypes.string
};

export default FormContainer;
