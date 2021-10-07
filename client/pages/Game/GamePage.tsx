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
  const {
    steamSingleGameNews,
    setSteamSingleGamesNews,
    steamSingleGameNewsLoading,
  } = useStore((state) => state);

  useEffect(() => {
    // fetch 30 most recent stories as steam doesn't allow querying a particular news GID
    if (appid) {
      setSteamSingleGamesNews(appid);
    }
  }, [setSteamSingleGamesNews]);

  return (
    <div className="page">
      <div className="content">
        <Tile>
          <>
            <img className="hero-image" src={steamHeroImageUrl(appid || "")} />
            <div>headings</div>
            <article className="single-article">
              <NewsArticle list={steamSingleGameNews} />
            </article>
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
