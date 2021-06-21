import React, { useEffect, useState } from "react";

//const gameList = ["test", "test2", "test3", "test4", "test5"];

async function fetchTopGames() {}

export const TopGames = () => {
  const [gameList, setGameList] = useState<SteamSpyGameList[]>([]);

  useEffect(() => {
    fetch("/api/steam/top-games-two-weeks").then((response) =>
      response.json().then((data) => setGameList(data))
    );
  }, []);

  return (
    <ol>
      {gameList.splice(0, 10).map((game, index) => {
        return <li key={index}>{game.name}</li>;
      })}
    </ol>
  );
};
