import "../styles/App.css";
import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import "./App.css";
import { Register } from "./Register/Register";
import useStore from "../components/useStore";
import { DbSteamUser } from "../../@types/database";
import Game from "./Game/GamePage";
import { Home } from "./Home/home";

const App = () => {
  const { setIsLoggedIn, setSteamProfile } = useStore((state) => state);

  useEffect(() => {
    // check if user is logged in and set state
    fetch("/api/auth/is-logged-in")
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data: DbSteamUser) => {
            setIsLoggedIn(true);
            setSteamProfile(data);
          });
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((_error) => {
        // do nothing
      });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/game">
          <Game/>
          </Route>
      </Switch>
    </div>
  );
};
export default App;
