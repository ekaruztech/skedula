import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "white" : "#4786ff")};
  color: ${props => (props.primary ? "white" : "white")};
  height: ${prop => prop.height};
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  padding: ${prop => prop.padding};
  border: none;
  border-radius: 3px;
  grid-area: ${prop => prop.gridArea};
  cursor: pointer;
  :hover {
    background-color: ${prop => prop.hoverBackground};
    color: ${prop => prop.hoverColor};
    transition: color ${prop => prop.transition},
      background-color ${prop => prop.transition};
  }
  :focus {
    outline-color: ${prop => prop.background};
  }
`;

Button.defaultProps = {
  padding: "8px 28px",
  background: "#5c8df6",
  color: "#FFFFFF",
  hoverBackground: "#454B57",
  hoverColor: "#ffffff",
  transition: "300ms ease-out",
  fontFamily: "sans-serif",
  radius: "2px",
  height: "none",
  gridArea: "none",
  fontSize: "15px"
};

export default Button;
