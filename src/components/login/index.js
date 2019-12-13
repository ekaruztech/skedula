import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../svg/Skedula-logo.svg";
import { ReactComponent as Delimeter } from "../svg/delimeter.svg";
import Button from "../element/Button";
import Input from "../element/Input";
import Text from "../element/Text";
import FormContainer from "../containers/form";
import IconContainer from "../containers/icon";
import InputContainer from "../containers/input";

const Icon = styled.i.attrs(prop => ({ className: prop.className }))`
  color: #e0e2e5;
`;

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

const LoginFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". . . l l l l l l . . ."
    ". . h h h h h h h h . .";
`;
function Login() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  return (
    <FormContainer>
      <LoginHeader>
        <Logo className="Logo" />
        <Text gridArea={"h"} fontSize={"20px"}>
          A weight task management and to-do application.
        </Text>
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
          <Button type={"submit"}>Login</Button>
        </ButtonContainer>
      </Form>
      <LoginFooter>
        <Delimeter className="Delimeter" />
        <Button height={"50px"} gridArea={"h"} fontSize={"20px"} padding={"0"}>
          CREATE YOUR SKEDULA ACCOUNT
        </Button>
      </LoginFooter>
    </FormContainer>
  );
}

export default Login;
