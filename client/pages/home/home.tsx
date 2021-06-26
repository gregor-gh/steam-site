import "./home.css";
import { News } from "../../components/News";
import { TopGames } from "../../components/TopGames";
import { Tile } from "../../components/Tile";
import useStore from "../../components/useStore";
import { useEffect } from "react";

export const Home = () => {
  const setTopGameList = useStore((state) => state.setTopGameList);
  useEffect(() => {
    setTopGameList();
  }, []);

  return (
    <div className="home">
      <div className="articles">
        <Tile item={<News />} />
        <Tile item={<News />} />
        <Tile item={<News />} />
        <Tile item={<News />} />
        <Tile item={<News />} />
      </div>
      <div className="asides">
        <Tile item={<TopGames />} />
      </div>
    </div>
  );
};
