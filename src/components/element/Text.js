// @ts-nocheck
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  grid-area: ${prop => prop.gridArea};
  font-size: ${prop => prop.fontSize};
  color: ${prop => prop.color};
`;

Text.defaultProps = {
  gridArea: "none",
  color: "#9d9d9d",
  fontSize: "15px"
};

Text.PropTypes = {
  gridArea: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string
};

export default Text;
