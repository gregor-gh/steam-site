import { LoadingLine, LoadingImage } from ".";

export const LoadingNewsItem = () => {
  return (
    <div className="news-big-item">
      <LoadingImage />
      <div>
        <LoadingLine />
        <LoadingLine />
        <LoadingLine />
      </div>
    </div>
  );
};
