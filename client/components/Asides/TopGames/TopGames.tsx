import "./TopGames.css";
import useStore from "../../useStore";
import { Aside } from "../Aside";

export const TopGames = () => {
  const topGameList = useStore((state) => state.topGameList);

  return (
    <Aside heading="🎮 Playing now">
      <ol className="top-games-list">
        {topGameList.slice(0, 10).map((game, index) => {
          return <li key={index}>{game.name}</li>;
        })}
      </ol>
    </Aside>
  );
};
