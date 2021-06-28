import "./TopGames.css";
import useStore from "../useStore";

export const TopGames = () => {
  const topGameList = useStore((state) => state.topGameList);

  return (
    <>
      <h3 className="aside-heading">🎮 Playing now</h3>
      <ol className="top-games-list">
        {topGameList.slice(0, 10).map((game, index) => {
          return <li key={index}>{game.name}</li>;
        })}
      </ol>
    </>
  );
};
