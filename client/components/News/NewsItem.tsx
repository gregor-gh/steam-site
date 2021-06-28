import "./news.css";

export const NewsItem = ({ newsItem }: { newsItem: SteamNewsItem }) => {
  const gameImage = `https://steamcdn-a.akamaihd.net/steam/apps/${newsItem.appid}/library_600x900.jpg`;
  return (
    
    <div className="news-big-item">
      <img
        className="news-item-image"
        src={gameImage}
      />

      <div>
        <p className="news-big-item-title">{newsItem.title}</p>
        <p className="news-big-item-description">{newsItem.contents.slice(0,200)+"..."}</p>
        <p className="news-big-item-posted-by">posted by {newsItem.author}</p>
      </div>
    </div>
  );
};
