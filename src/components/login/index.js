
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../assets/images/Skedula.svg";
import "./Login.scss";
import InputField from "../elements/InputField";
import Button from "../elements/Button";

const Login = props => {
  return (
    <Container className="themed-container " fluid={true}>
      <Row className="mt-4">
        <Col xs="12" lg="6" className="mt-5">
          <div className="text-center">
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-title text-center">
            A lightweight task management and todo app
          </p>
          <form>
            <div className="input-group mb-2 w-75 mt-4 mx-auto">
              <div className="input-group-prepend ">
                <div className="input-group-text">
                  <i className="fas fa-user text-secondary"></i>
                </div>
              </div>
              <InputField type={"text"} placeholder="Username" />
            </div>
            <div className="input-group mb-2 w-75 mt-4 mx-auto">
              <div className="input-group-prepend ">
                <div className="input-group-text">
                  <i className="fas fa-lock text-secondary"></i>
                </div>
              </div>
              <InputField type={"password"} placeholder="Password" />
            </div>
            <div className="ml-5 mt-4">
              <Button variant="primary" size={"lg"}>
                Login
              </Button>
              <h4>Forgot password?</h4>
            </div>
          </form>
        </Col>
        <Col xs="6">.col-6</Col>
      </Row>
    </Container>


  );
};

export default Login;
