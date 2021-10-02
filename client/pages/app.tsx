import "../styles/App.css";
import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./Home/Home";
import { Navbar } from "../components/Navbar/Navbar";
import "./app.css";
import { Register } from "./Register/Register";
import useStore from "../components/useStore";
import { DbSteamUser } from "../../@types/database";
import {Article} from "../components/Article";
import Game from "./Game/Game";

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
        <Route path="/game/:appid/news/:newsid" >
          <Article />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
