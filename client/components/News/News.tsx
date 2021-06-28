import useStore from "../useStore";

export const News = () => {
  const topNews = useStore((state) => state.topSteamNews);

  const topTenNews = topNews.slice(0,10).map((newsItem: SteamNewsItem, index) => {
    return <li key={index}>{newsItem.title}</li>;
  });

  return (
    <div>
      <ul className="generic-list">{topTenNews}</ul>
    </div>
  );
};
