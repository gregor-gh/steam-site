import React from "react";

const gameList = ["test", "test2", "test3", "test4", "test5"];

export const TopGames = () => {
  return (
    <ol>
      {gameList.map((game, index) => {
        return <li key={index}>{game}</li>
      })}
    </ol>
  );
};
