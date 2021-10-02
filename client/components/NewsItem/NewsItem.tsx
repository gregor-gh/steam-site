import { steam600x900ImageUrl } from "../../helpers/steamImages";
import { stripHtmlFromString } from "../../helpers/text";
import "./NewsItem.css";

export const NewsItem = ({ newsItem }: { newsItem: SteamNewsItem }) => {
  const parsedContents = stripHtmlFromString(newsItem.contents);
  return (
      <a href="/game" className="news-big-item">
        <img
          className="news-big-item-image"
          src={steam600x900ImageUrl(newsItem.appid)}
        />

        <div>
          <p className="news-big-item-title">{newsItem.title}</p>
          <p className="news-big-item-description">
            {parsedContents.slice(0, 200) + "..."}
          </p>
          <p className="news-big-item-posted-by">posted by {newsItem.author}</p>
        </div>
      </a>
  );
};
