import styled from "styled-components";

const Input = styled.input.attrs(prop => ({
  type: prop.type,
  placeholder: prop.placeholder
}))`
  height: 100%;
  display: flex;
  padding: 5px;
  grid-area: i;
  border: none;
  font-size: 15px;
  color: ${prop => prop.color};
  outline: none;
  ::placeholder {
    color: #999;
  }
`;

Input.defaultProps = {
  color: "#707070"
};

export default Input;
