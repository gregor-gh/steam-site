import "./home.css";
import {
  News,
  TopTenSteamNews,
  TopTenRecentlyPlayedNews,
} from "../../components/News";
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
        {isLoggedIn === true && <Tile item={<TopTenRecentlyPlayedNews />} />}
        <Tile item={<TopTenSteamNews />} />
        <Tile item={<News />} />
        <Tile item={<News />} />
      </div>
      <div className="asides">
        <Tile item={<TopGames />} />
        {isLoggedIn === true && <Tile item={<UserRecentlyPlayed />} />}
        {isLoggedIn === false && <Tile item={<RegisterAside />} />}
      </div>
    </div>
  );
};
