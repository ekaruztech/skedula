import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Skedula App</h1>
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
