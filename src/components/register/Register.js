import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../assets/images/Skedula.svg";
import "./Register.scss";
import InputField from "../elements/InputField";
import Button from "../elements/Button";

const Register = props => {
  return (
    <Container className="themed-container ">
      <Row>
        <Col xs="12" lg="6">
          <div className="text-center">
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-title text-center">
            A lightweight task management and todo app
          </p>
          <form>
            <div className="form-group mb-2 w-75 mt-3 mx-auto">
              <div className="input-group-prepend ">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-envelope"></i>
                </div>
                <InputField
                  type={"email"}
                  placeholder="email@yourcompany.com"
                />
              </div>
            </div>
            <div className="form-group mb-2 w-75 mt-3 mx-auto">
              <div className="input-group-prepend ">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-user"></i>
                </div>
                <InputField type={"text"} placeholder="Username" />
              </div>
            </div>
            <div className="form-group mb-2 w-75 mt-3 mx-auto">
              <div className="input-group-prepend ">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-lock"></i>
                </div>
                <InputField type={"password"} placeholder="Password" />
              </div>
            </div>
            <div className="form-group mb-2 w-75 mt-3 mx-auto">
              <div className="input-group-prepend ">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-lock"></i>
                </div>
                <InputField type={"password"} placeholder="Confirm password" />
              </div>
            </div>
            <Row>
              <Col className="ml-3">
                <Button variant="primary" size={"md"} style=" px-4 p-1">
                  Register
                </Button>
              </Col>
              <p className="mr-5"> Already have an Account? </p>
            </Row>
          </form>
        </Col>
        <Col xs="6">.col-6</Col>
      </Row>
    </Container>
  );
};

export default Register;
