import "./Home.css";
import {
  TopTenSteamNews,
  TopTenRecentlyPlayedNews,
} from "../../components/NewsItem";
import {
  TopGames,
  UserRecentlyPlayed,
} from "../../components/Asides/NumberedList";
import { Tile } from "../../components/Tile";
import useStore from "../../components/useStore";
import { useEffect } from "react";
import { RegisterAside } from "../../components/Asides/RegisterAside";

export const Home = () => {
  const {
    setTopGameList,
    setTopSteamNews,
    setUserRecentlyPlayedList,
    setRecentlyPlayedNews,
    isLoggedIn,
  } = useStore((state) => state);
  useEffect(() => {
    setTopGameList();
    setTopSteamNews();
    if (isLoggedIn === true) {
      setUserRecentlyPlayedList();
      setRecentlyPlayedNews();
    }
  }, [isLoggedIn]);

  return (
    <div className="home">
      <div className="articles">
        {isLoggedIn === true && (
          <Tile>
            <TopTenRecentlyPlayedNews />
          </Tile>
        )}
        <Tile>
          <TopTenSteamNews />
        </Tile>
      </div>
      <div className="asides">
        <Tile>
          <TopGames />
        </Tile>
        {isLoggedIn === true && (
          <Tile>
            <UserRecentlyPlayed />
          </Tile>
        )}
        {isLoggedIn === false && (
          <Tile>
            <RegisterAside />
          </Tile>
        )}
      </div>
    </div>
  );
};
