import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/register/Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
