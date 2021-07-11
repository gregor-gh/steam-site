import useStore from "../useStore";
import { NewsItem } from ".";
import { LoadingNewsItem } from "../Loading";

export const TopTenNewsItems = () => {
  const { topSteamNews, topSteamNewsLoading } = useStore((state) => state);

  const topTenNews = topSteamNews
    .slice(0, 10)
    .map((newsItem: SteamNewsItem, index) => {
      return <NewsItem key={index} newsItem={newsItem} />;
    });

  // before topNews has loaded show a preview
  console.log(topSteamNews);
  if (topSteamNewsLoading)
    return (
      <>
        <LoadingNewsItem />
        <LoadingNewsItem />
        <LoadingNewsItem />
        <LoadingNewsItem />
        <LoadingNewsItem />
      </>
    );

  return <>{topTenNews}</>;
};
