import useStore from "../useStore";
import { NewsItemsList } from ".";
import { useEffect } from "react";

export const SingleGameNews = ({ appid }: { appid: string }) => {
  const {
    steamSingleGameNews,
    steamSingleGameNewsLoading,
    setSteamSingleGamesNews,
  } = useStore((state) => state);

  useEffect(() => {
    setSteamSingleGamesNews(appid);
  }, [appid]);

  return (
    <NewsItemsList
      numberOfItems={10}
      list={steamSingleGameNews}
      listLoading={steamSingleGameNewsLoading}
    />
  );
};
