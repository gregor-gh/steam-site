import { useEffect } from "react";
import { dangerouslyAddHtmlToSteamContents } from "../../helpers/text";
import { getAppIdFromUrl, getNewsIdFromUrl } from "../../helpers/url";
import { LoadingLine } from "../Loading";
import useStore from "../useStore";

const NewsArticle = () => {
  const {
    steamSingleGameNews,
    setSteamSingleGamesNews,
    steamSingleGameNewsLoading,
  } = useStore((state) => state);

  const appid = getAppIdFromUrl(window.location.href);
  const newsid = getNewsIdFromUrl(window.location.href);

  useEffect(() => {
    // fetch 30 most recent stories as steam doesn't allow querying a particular news GID
    if (appid) {
      setSteamSingleGamesNews(appid);
    }
  }, [setSteamSingleGamesNews]);

  const thisNewsItem = steamSingleGameNews.filter(
    (newsItem) => newsItem.gid === newsid
  )[0]?.contents;
  return (
    <article className="single-article">
      {steamSingleGameNewsLoading ? (
        <>
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
        </>
      ) : (
        <div
          className="article-text"
          dangerouslySetInnerHTML={{
            // this is very bad practice and open to xss attack, safe enough for a test project
            // as Steam is the source but definitely would not use this in a live system
            __html: dangerouslyAddHtmlToSteamContents(thisNewsItem),
          }}
        />
      )}
    </article>
  );
};

export { NewsArticle };
