import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Auth />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
