import { NumberedList } from ".";
import useStore from "../../useStore";

export const TopGames = () => {
  const { topGameList, topGameListLoading } = useStore((state) => state);

  return (
    <NumberedList
      heading="🎮 Steam playing now"
      list={topGameList}
      listLoading={topGameListLoading}
    />
  );
};
