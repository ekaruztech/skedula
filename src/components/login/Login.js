import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Delimeter } from "../assets/images/delimeter.svg";
import { Container, Row, Col } from "reactstrap";
import Hero from "../elements/Hero";
import Elipse from "../elements/Elipse";
import Logo from "../assets/images/Skedula.svg";
import InputField from "../elements/InputField";
import Button from "../elements/Button";
import { connect } from "react-redux";
import "./Login.scss";
import validateUser from "./../../state/actions/validateUser";

const Login = props => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setSubmit(prev => true);

    const value = {
      user,
      password
    };
    props.login(value);
  };
  function Error(props) {
    return (
      <div className="Error">
        <p className="error-text">{props.text}</p>
      </div>
    );
  }
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
          <form onSubmit={handleSubmit}>
            <div className="form-group w-80">
              <div className="input-group-prepend">
                <InputField
                  placeholder="Username or Email"
                  value={user}
                  icon={<i className="fas fa-user"></i>}
                  onChange={e => setUser(e.target.value)}
                  error={
                    props.errors.errors.user.failed ? "inputfield-error" : ""
                  }
                />
              </div>
              {props.errors.errors.user.failed ? (
                <Error text={props.errors.errors.user.message} />
              ) : (
                ""
              )}
            </div>
            <div className="form-group w-80">
              <div className="input-group-prepend">
                <InputField
                  type={"password"}
                  placeholder="Password"
                  value={password}
                  icon={<i className="fas fa-lock"></i>}
                  onChange={e => setPassword(e.target.value)}
                  error={
                    props.errors.errors.user.failed ? "inputfield-error" : ""
                  }
                />
              </div>
              {props.errors.errors.password.failed ? (
                <Error text={props.errors.errors.password.message} />
              ) : (
                ""
              )}
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <Button
                  color="primary"
                  size="sm"
                  disabled={submit && props.errors.failed === false}
                  className={
                    submit && props.errors.failed === false
                      ? "pt-2 pr-4 pb-2 pl-4 btn-animate btn-opacity"
                      : "pt-2 pr-4 pb-2 pl-4 btn-animate"
                  }
                >
                  {submit && props.errors.failed === false
                    ? "Verifying..."
                    : "Login"}
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

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(validateUser(payload))
});
const mapStateToProps = state => {
  const {
    errors: { login }
  } = state;
  return {
    errors: login
  };
};

const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginComponent;
