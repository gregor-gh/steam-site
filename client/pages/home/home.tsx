import "./home.css";
import { News, TopTenNewsItems } from "../../components/News";
import { NumberedList, TopGames } from "../../components/Asides/NumberedList";
import { Tile } from "../../components/Tile";
import useStore from "../../components/useStore";
import { useEffect } from "react";
import { RegisterAside } from "../../components/Asides/RegisterAside";

export const Home = () => {
  const { setTopGameList, setTopSteamNews } = useStore((state) => state);
  useEffect(() => {
    setTopGameList();
    setTopSteamNews();
  }, []);

  return (
    <div className="home">
      <div className="articles">
        <Tile item={<TopTenNewsItems />} />
        <Tile item={<News />} />
        <Tile item={<News />} />
      </div>
      <div className="asides">
        <Tile item={<TopGames />} />
        <Tile item={<RegisterAside />} />
      </div>
    </div>
  );
};
