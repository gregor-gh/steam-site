import { NewsItem } from ".";
import { LoadingNewsItem } from "../Loading";

export const NewsItemsList = ({
  numberOfItems,
  list,
  listLoading,
}: {
  list: SteamNewsItem[];
  listLoading: boolean;
  numberOfItems: number;
  }) => {
  const slicedList = list
    .slice(0, numberOfItems)
    .map((newsItem: SteamNewsItem, index) => {
      return <NewsItem key={index} newsItem={newsItem} />;
    });

  // before topNews has loaded show a preview
  if (listLoading)
    return (
      <>
        <LoadingNewsItem />
        <LoadingNewsItem />
        <LoadingNewsItem />
        <LoadingNewsItem />
        <LoadingNewsItem />
      </>
    );

  return <>{slicedList}</>;
};

