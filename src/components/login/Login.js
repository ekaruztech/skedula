import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Delimeter } from "../assets/images/delimeter.svg";
import { Container, Row, Col } from "reactstrap";
import Hero from "../elements/Hero";
import Elipse from "../elements/Elipse";
import Logo from "../assets/images/Skedula.svg";
import InputField from "../elements/InputField";
import Button from "../elements/Button";

const Login = props => {
  return (
    <Container className="themed-container p-0 m-0" fluid={true}>
      <Row className="mt-2">
        <Col xs="2" lg="1" className="d-none d-md-block">
          <Elipse />
        </Col>
        <Col xs="10" md="5" lg="5" className="mt-5">
          <div className="text-center">
            <img src={Logo} alt="logo" />
          </div>
          <p className="lead mb-4 text-muted">
            A lightweight task management and todo app
          </p>
          <form>
            <div className="form-group w-80">
              <div className="input-group-prepend">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-user"></i>
                </div>
                <InputField placeholder="Username" />
              </div>
            </div>
            <div className="form-group w-80 mt-4">
              <div className="input-group-prepend">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-lock"></i>
                </div>
                <InputField type={"password"} placeholder="Password" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <Button variant="primary" size={"sm"} style="px-4 p-1 lead">
                  Login
                </Button>
              </div>
              <p className="col-md-6 text-primary px-5 pwd">
                Forgot password.. ?
              </p>
            </div>
          </form>
          <Delimeter className="Delimeter text-center" />
          <div className="text-center mt-4">
            <Link to="/register" className="btn btn-primary px-5 p-2">
              CLICK HERE TO REGISTER
            </Link>
          </div>
        </Col>
        <Col xs="12" lg="6" className="d-none d-md-block">
          <Hero />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
