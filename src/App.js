import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import SingleTodoPage from "./components/dashboard/SingleTodoPage";
import TaskPage from "./components/dashboard/TaskPage";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./route/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/todo" component={SingleTodoPage} />
        <Route exact path="/task" component={TaskPage} />
        <Route exact path="/register" component={Register} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
