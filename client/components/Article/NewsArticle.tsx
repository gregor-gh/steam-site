import { dangerouslyAddHtmlToSteamContents } from "../../helpers/text";
import { getAppIdFromUrl, getNewsIdFromUrl } from "../../helpers/url";
import "./Article.css";

const NewsArticle = ({ list }: { list: SteamNewsItem[] }) => {
  const appid = getAppIdFromUrl(window.location.href);
  const newsid = getNewsIdFromUrl(window.location.href);

  const thisNewsItem = list.filter((newsItem) => newsItem.gid === newsid)[0]
    ?.contents;
  return (
    <div
      className="article-text"
      dangerouslySetInnerHTML={{
        // this is very bad practice and open to xss attack, safe enough for a test project
        // as Steam is the source but definitely would not use this in a live system
        __html: dangerouslyAddHtmlToSteamContents(thisNewsItem),
      }}
    />
  );
};

export { NewsArticle };
