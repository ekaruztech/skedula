import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Hero from "../elements/Hero";
import Elipse from "../elements/Elipse";
import Logo from "../assets/images/Skedula.svg";
import InputField from "../elements/InputField";
import Button from "../elements/Button";

const Register = props => {
  return (
    <Container className="themed-container px-0" fluid={true}>
      <Row className="mt-2">
        <Col xs="2" lg="1" className="d-none d-md-block">
          <Elipse />
        </Col>
        <Col xs="10" md="5" lg="5" className="mt-5">
          <div className="text-center">
            <img src={Logo} alt="logo" />
          </div>
          <p className="lead mb-4 text-center">
            Register an account with us now
          </p>
          <p>
            * <small className="text-danger"> = Required fields</small>
          </p>
          <form>
            <div className="form-group w-80 ">
              <div className="input-group-prepend">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-user"></i>
                </div>
                <InputField placeholder="* Username" />
              </div>
            </div>
            <div className="form-group w-80 mt-4">
              <div className="input-group-prepend">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-at"></i>
                </div>
                <InputField type="email" placeholder="* Email" />
              </div>
            </div>
            <div className="form-group w-80 mt-4">
              <div className="input-group-prepend ">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-lock"></i>
                </div>
                <InputField type={"password"} placeholder="* Password" />
              </div>
            </div>
            <div className="form-group w-80 mt-4">
              <div className="input-group-prepend ">
                <div className="input-group-text iconStyle">
                  <i className="fas fa-lock"></i>
                </div>
                <InputField
                  type={"password"}
                  placeholder="* Confirm Password"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <Button variant="primary" size={"sm"} style="px-4 p-1 lead">
                  Register
                </Button>
              </div>
              <Link to="/" className="col-md-6 text-primary px-4 pwd">
                Already have an account
              </Link>
            </div>
          </form>
        </Col>
        <Col xs="12" lg="6" className="d-none d-md-block">
          <Hero />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
