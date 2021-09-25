import useStore from "../useStore";
import { NewsItemsList } from ".";

export const TopTenNewsItems = () => {
  const { topSteamNews, topSteamNewsLoading } = useStore((state) => state);

  return (
    <NewsItemsList
      numberOfItems={10}
      list={topSteamNews}
      listLoading={topSteamNewsLoading}
    />
  );
};
