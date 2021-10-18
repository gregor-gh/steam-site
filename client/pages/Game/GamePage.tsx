import { Link, Redirect, Route, Router, Switch } from "react-router-dom";
import { NewsArticle } from "../../components/Article";
import { RegisterAside } from "../../components/Asides/RegisterAside";
import { Tile } from "../../components/Tile";
import { steamHeroImageUrl } from "../../helpers/steamImages";
import { getAppIdFromUrl } from "../../helpers/url";
import "../App.css";
import "./Game.css";
import { SingleGameNews } from "../../components/NewsItem";
import useStore from "../../components/useStore";
import React from "react";
import { AchievementList } from "../../components/Achievements";

const Game = () => {
  const appid = getAppIdFromUrl(window.location.href);
  const { isLoggedIn,steamProfile } = useStore((state) => state);

  return (
    <div className="page">
      <div className="content">
        <Tile>
          <>
            <img className="hero-image" src={steamHeroImageUrl(appid || "")} />
            <nav className="game-nav">
              <Link
                className="game-nav-item"
                to={`/game/${appid}/achievements`}
              >
                Achievements
              </Link>
              <Link className="game-nav-item" to={`/game/${appid}/news`}>
                News
              </Link>
              <Link className="game-nav-item" to={`/game/${appid}/forum`}>
                Forum
              </Link>
            </nav>
            <Switch>
              <Route exact path="/game/:appid">
                <Redirect to={`/game/${appid}/achievements`} />
              </Route>
              <Route exact path="/game/:appid/achievements">
                <AchievementList appid={appid} steamUserId={steamProfile?.steamId} />
              </Route>
              <Route exact path="/game/:appid/news">
                <SingleGameNews appid={appid || ""} />
              </Route>
              <Route exact path="/game/:appid/forum">
                foryum
              </Route>
              <Route exact path="/game/:appid/news/:newsid">
                <NewsArticle />
              </Route>
            </Switch>
          </>
        </Tile>
      </div>

      <div className="asides">
        {isLoggedIn === false && (
          <Tile>
            <RegisterAside />
          </Tile>
        )}
      </div>
    </div>
  );
};

export default Game;
