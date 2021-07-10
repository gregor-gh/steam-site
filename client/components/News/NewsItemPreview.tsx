export const NewsItemPreview = () => {
  const newsLine = (
    <div className="news-item-preview-box news-item-preview-line" />
  );

  const preview = (
    <div className="news-big-item">
      <div className="news-big-item-image news-item-preview-box news-item-preview-image" />
      <div>
        {newsLine}
        {newsLine}
        {newsLine}
      </div>
    </div>
  );

  const array = [0, 1, 2, 3, 4, 5].map(() => {
    return preview;
  });

  return <>{array}</>;
};
