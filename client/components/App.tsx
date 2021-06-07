import "../styles/App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Logon from "./Logon";
import Dashboard from "./Dashboard";

const test = async () => {
  window.location.href = "/api/auth";
};

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <Router>
      {isSignedIn ? <Redirect to="/Dashboard" /> : <Redirect to="/Logon" />}
      <Switch>
        <Route path="/logon">
          <Logon />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
