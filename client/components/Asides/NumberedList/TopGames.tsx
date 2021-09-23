import React from "react";
import { NumberedList } from ".";
import useStore from "../../useStore";

export const TopGames = () => {
  const { topGameList, topGameListLoading } = useStore((state) => state);

  return (
    <NumberedList
      heading="🎮 Playing now"
      list={topGameList}
      listLoading={topGameListLoading}
    />
  );
};
