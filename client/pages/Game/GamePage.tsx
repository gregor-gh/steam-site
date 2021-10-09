import { Link, Route, Router, Switch } from "react-router-dom";
import { useEffect } from "react";
import { NewsArticle } from "../../components/Article";
import { RegisterAside } from "../../components/Asides/RegisterAside";
import { Tile } from "../../components/Tile";
import useStore from "../../components/useStore";
import { steamHeroImageUrl } from "../../helpers/steamImages";
import { getAppIdFromUrl } from "../../helpers/url";
import "../App.css";
import "./Game.css";

const Game = () => {
  const appid = getAppIdFromUrl(window.location.href);

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
                game
              </Route>
              <Route exact path="/game/:appid/news">
                news
              </Route>
              <Route exact path="/game/:appid/news/:newsid">
                <NewsArticle />
              </Route>
            </Switch>
          </>
        </Tile>
      </div>

      <div className="asides">
        <Tile>
          <RegisterAside />
        </Tile>
      </div>
    </div>
  );
};

export default Game;
