import "./TopGames.css";
import useStore from "../../useStore";
import { Aside } from "../Aside";
import { LoadingLine } from "../../Loading";

export const TopGames = () => {
  const { topGameList, topGameListLoading } = useStore((state) => state);

  return (
    <Aside heading="🎮 Playing now">
      {topGameListLoading ? (
        <>
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
        </>
      ) : (
        <ol className="top-games-list">
          {topGameList.slice(0, 10).map((game, index) => {
            return <li key={index}>{game.name}</li>;
          })}
        </ol>
      )}
    </Aside>
  );
};
