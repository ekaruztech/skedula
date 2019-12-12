import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "white" : "#4786ff")};
  color: ${props => (props.primary ? "white" : "white")};
  font-size: 1.23em;
  font-weight: 900;
  font-family: "Montserrat", sans-serif;
  margin: 1em;
  padding: 10px 26px;
  border: none;
  border-radius: 3px;
`;

export default Button;
