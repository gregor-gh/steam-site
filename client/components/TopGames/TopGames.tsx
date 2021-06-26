import React, { useEffect, useState } from "react";
import "./TopGames.css";
import useStore from "../useStore";

//const gameList = ["test", "test2", "test3", "test4", "test5"];

async function fetchTopGames() {}

export const TopGames = () => {
  const topGameList = useStore((state) => state.topGameList);

  return (
    <>
      <h3 className="aside-heading">🎮 Playing now</h3>
      <ol className="top-games-list">
        {topGameList.splice(0, 10).map((game, index) => {
          return <li key={index}>{game.name}</li>;
        })}
      </ol>
    </>
  );
};
