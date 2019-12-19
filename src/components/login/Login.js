import { validateForm, saveFormData } from "./../../state/actions/form/index";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as Delimeter } from "../assets/images/delimeter.svg";
import { Container, Row, Col, Alert } from "reactstrap";
import Hero from "../elements/Hero";
import Elipse from "../elements/Elipse";
import Logo from "../assets/images/Skedula.svg";
import InputField from "../elements/InputField";
import Button from "../elements/Button";
import { connect } from "react-redux";
import "./Login.scss";

import { login } from "./../../state/actions/auth";

const Login = ({ login, form, errors, save, validate, history, auth }) => {
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/");
    }
  }, [auth.isAuthenticated, history]);
  const handleSubmit = e => {
    e.preventDefault();

    const value = {
      data: {
        email: form.values.email,
        password: form.values.password
      },
      key: "login"
    };
    validate({
      key: "login",
      payload: {
        data: value.data
      },
      onSuccess: "SAVE_FORM_DATA",
      onError: "SET_UI_ERROR",
      type: Object.keys(value.data)
    });

    login(value.data);
  };

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    save({
      type: name,
      data: { [name]: value },
      key: "login"
    });
  };
  function Error(props) {
    return (
      <div className={`Error ${props.className}`}>
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
              {errors && errors.login && (
                <Alert color="danger">{errors.login}</Alert>
              )}
              <div className="input-group-prepend">
                <InputField
                  placeholder="Email Address"
                  value={form.values.email}
                  name={"email"}
                  icon={<i className="fas fa-user"></i>}
                  type={"email"}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  error={errors && errors.email && "inputfield-error"}
                />
              </div>
              {errors && errors.email && <Error text={errors.email} />}
            </div>
            <div className="form-group w-80">
              <div className="input-group-prepend">
                <InputField
                  type={"password"}
                  placeholder="Password"
                  value={form.values.password}
                  email={"password"}
                  name={"password"}
                  icon={<i className="fas fa-lock"></i>}
                  onChange={e => handleChange(e)}
                  onBlur={e => handleChange(e)}
                  error={errors && errors.password && "inputfield-error"}
                />
              </div>
              {errors && errors.password && <Error text={errors.password} />}
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <Button
                  color="primary"
                  size="sm"
                  // className={
                  //   props.isLoading
                  //     ? "pt-2 pr-4 pb-2 pl-4 btn-animate btn-opacity"
                  //     : "pt-2 pr-4 pb-2 pl-4 btn-animate"
                  // }
                >
                  {/* {props.isLoading ? "Verifying..." : "Login"} */}
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

Login.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload)),
  validate: payload => dispatch(validateForm(payload)),
  save: payload => dispatch(saveFormData(payload))
});
const mapStateToProps = state => {
  return {
    errors: {
      email: state.ui.errors["email"],
      password: state.ui.errors["password"]
    },
    form: state.form["login"],
    auth: state.auth
  };
};

const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginComponent;
