import "../styles/App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Logon from "../components/Logon";
import Dashboard from "../components/Dashboard";
import { Home } from "./home/home";
import { Navbar } from "../components/Navbar/Navbar";
import "./app.css";
import { Register } from "./register/Register";
import useStore from "../components/useStore";

const App = () => {
  const { setIsLoggedIn } = useStore((state) => state);

  useEffect(() => {
    // check if user is logged in and set state
    fetch("/api/auth/is-logged-in")
      .then((data) => {
        if (data.status === 400) return setIsLoggedIn(true);
      })
      .catch((_error) => {
        // do nothing
      });
    setIsLoggedIn(false);
  }, []);
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
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
