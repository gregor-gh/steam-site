import useStore from "../useStore";
import { NewsItemsList } from ".";

export const TopTenRecentlyPlayedNews = () => {
  const { recentlyPlayedNews, recentlyPlayedNewsLoading } = useStore(
    (state) => state
  );

  return (
    <NewsItemsList
      numberOfItems={10}
      list={recentlyPlayedNews}
      listLoading={recentlyPlayedNewsLoading}
    />
  );
};
