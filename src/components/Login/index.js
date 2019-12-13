import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../svg/Skedula-logo.svg";
import { ReactComponent as Delimeter } from "../svg/delimeter.svg";
const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  background-color: #ffffff;
  grid-template-rows: repeat(3, 1fr);
`;

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
  borderColor: "#E0E2E5",
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
const IconContainer = styled.span`
  height: 100%;
  display: grid;

  border-right: 1px solid #e0e2e5;
  background: none;
  grid-area: s;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i.attrs(prop => ({ className: prop.className }))`
  color: #e0e2e5;
`;
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
  color: #707070;
  outline: none;
  ::placeholder {
    color: #999;
  }
`;

const PrimaryButton = styled.button.attrs(prop => ({ type: prop.type }))`
  padding: ${prop => prop.padding};

  background: none;
  border-radius: ${prop => prop.radius};
  cursor: pointer;
  font-size: 15px;
  font-family: ${prop => prop.fontFamily};
  background-color: ${prop => prop.background};
  color: ${prop => prop.color};
  transition: background-color ${prop => prop.transition};
  border: none;
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

PrimaryButton.defaultProps = {
  padding: "8px 28px",
  background: "#5c8df6",
  color: "#FFFFFF",
  hoverBackground: "#454B57",
  hoverColor: "#ffffff",
  transition: "300ms ease-out",
  fontFamily: "sans-serif",
  radius: "2px"
};

PrimaryButton.PropTypes = {
  size: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hoverBackground: PropTypes.string,
  hoverColor: PropTypes.string,
  transition: PropTypes.string,
  fontFamily: PropTypes.string
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  grid-area: b;
`;

// prettier-ignore
const Link = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-contents: center;
  a {
    color: ${prop => prop.primaryColor};
    text-decoration: none;
    font-size: ${prop => prop.fontSize}${prop => prop.sizeUnit};
    &:hover {
      color: ${prop => prop.hoverColor};
      animation: ${prop => prop.animation};
    }
  }
`;
Link.defaultProps = {
  fontSize: 14,
  sizeUnit: "px",
  primaryColor: "#999",
  hoverColor: "#4786ff",
  animation: "250ms ease-out"
};

Link.PropTypes = {
  fontSize: PropTypes.number.isRequired,
  sizeUnit: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired
};

const Form = styled.form`
  width: 100%;

  background-color: #fff;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: ${prop => prop.layout};
`;
Form.defaultProps = {
  layout: `
		". . e e e e e e e e . ."
		". . p p p p p p p p . ."
		". . b b b b b b b b . ."`
};
const Error = styled.p`
  color: rgb(240, 52, 73);
  font-size: 13px;
  padding: 10px 0px;
  margin: 0px 0px 5px 0px;
  font-family: "Montserrat medium";
  opacity: 0.8;
  grid-area: ${prop => prop.gridArea};
`;
Error.defaultProps = {
  gridArea: "t"
};

const LoginHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    ". . . . l l l l . . . ."
    ". . h h h h h h . . . .";
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  grid-area: h;
  font-size: 20px;
  color: #9d9d9d;
`;
const LoginFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    ". . . l l l l l l . . ."
    ". . h h h h h h . . . .";
`;
function Login() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  return (
    <FormContainer>
      <LoginHeader>
        <Logo className="Logo" />
        <Text>A weight task management and to do application.</Text>
      </LoginHeader>
      <Form>
        <InputContainer>
          <IconContainer>
            <Icon className="fa fa-user" />
          </IconContainer>
          <Input
            type={"text"}
            placeholder={"Username or Email"}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </InputContainer>

        <InputContainer gridArea={"p"}>
          <IconContainer>
            <Icon className="fa fa-key" />
          </IconContainer>
          <Input
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <Link>
            <a href="#">Forgot password ?</a>
          </Link>
          <PrimaryButton type={"submit"}>Login</PrimaryButton>
        </ButtonContainer>
      </Form>
      <LoginFooter>
        <Delimeter className="Delimeter" />
      </LoginFooter>
    </FormContainer>
  );
}

export default Login;
