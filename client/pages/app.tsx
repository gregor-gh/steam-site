import "../styles/App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Logon from "../components/Logon";
import Dashboard from "../components/Dashboard";
import { Home } from "./home";
import { Navbar } from "../components/Navbar/Navbar";

const App = () => {
  //const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    // <>
    //   {isSignedIn ? <Redirect to="/Dashboard" /> : <Redirect to="/Logon" />}
    //   <Switch>
    //     <Route path="/logon">
    //       <Logon />
    //     </Route>
    //     <Route path="/dashboard">
    //       <Dashboard />
    //     </Route>
    //   </Switch>
    // </>
    <div>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
