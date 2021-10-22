import { LoadingLine, LoadingImage } from ".";
import "../NewsItem/NewsItem.css"

export const LoadingNewsItem = () => {
  return (
    <div className="news-big-item">
      <LoadingImage />
      <div className="news-item-preview-lines">
        <LoadingLine />
        <LoadingLine />
        <LoadingLine />
      </div>
    </div>
  );
};
