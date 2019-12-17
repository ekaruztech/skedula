import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SingleTodoPage from "./components/dashboard/SingleTodoPage";
import TaskPage from "./components/dashboard/TaskPage";
import Register from "./components/register/Register";

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
      </div>
    </Router>
  );
}

export default App;
