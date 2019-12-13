import React from "react";
import User from "../containers/user";
import Login from "../login";
import Hero from "../containers/hero";
import { BrowserRouter as Router } from "react-router-dom";

function index() {
  return (
    <Router>
      <User>
        <Login />
        <Hero />
      </User>
    </Router>
  );
}

export default index;
