import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path={"/login"} component={Auth} />
        </div>
      </Switch>

    </Router>
  );
}

export default App;
