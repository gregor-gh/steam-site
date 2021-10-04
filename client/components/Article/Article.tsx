import { useEffect, useState } from "react";
import { steamHeroImageUrl } from "../../helpers/steamImages";
import { dangerouslyAddHtmlToSteamContents } from "../../helpers/text";
import { getAppIdFromUrl, getNewsIdFromUrl } from "../../helpers/url";
import { LoadingLine } from "../Loading";
import useStore from "../useStore";
import "./Article.css";

const Article = () => {
  const appid = getAppIdFromUrl(window.location.href);
  const newsid = getNewsIdFromUrl(window.location.href);

  const {
    steamSingleGameNews,
    setSteamSingleGamesNews,
    steamSingleGameNewsLoading,
  } = useStore((state) => state);

  useEffect(() => {
    // fetch 30 most recent stories as steam doesn't allow querying a particular news GID
    if (appid) {
      setSteamSingleGamesNews(appid);
    }
  }, [setSteamSingleGamesNews]);

  const Test = ({ contents }: { contents: string }) => {
    if (steamSingleGameNewsLoading) return <LoadingLine />;
    return (
      <div
        className="article-text"
        dangerouslySetInnerHTML={{
          // this is very bad practice and open to xss attack, safe enough for a test project
          // as Steam is the source but definitely would not use this in a live system
          __html:
            // dangerouslyAddHtmlToSteamContents(
            contents,
          // ),
        }}
      />
    );
  };

  const NewsItemsList = ({ list }: { list: SteamNewsItem[] }) => {
    const thisNewsItem = list.filter((newsItem) => newsItem.gid === newsid)[0]
      ?.contents;

    // before topNews has loaded show a preview
    // if (listLoading)
    //   return (
    //     <>
    //       <LoadingNewsItem />
    //       <LoadingNewsItem />
    //       <LoadingNewsItem />
    //       <LoadingNewsItem />
    //       <LoadingNewsItem />
    //     </>
    //   );

    return (
      <div
        className="article-text"
        dangerouslySetInnerHTML={{
          // this is very bad practice and open to xss attack, safe enough for a test project
          // as Steam is the source but definitely would not use this in a live system
          __html:
            // dangerouslyAddHtmlToSteamContents(
            thisNewsItem,
          // ),
        }}
      />
    );
  };

  return (
    <div className="news-article">
      <img
        className="news-article-heading"
        src={steamHeroImageUrl(appid || "")}
      />
      <article className="single-article">
        <NewsItemsList list={steamSingleGameNews} />
      </article>
    </div>
  );
};

export { Article };
