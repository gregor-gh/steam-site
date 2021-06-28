import React from "react";
import useStore from "../useStore";
import { NewsItem } from "./NewsItem";

export const TopTenNewsItems = () => {
  const topNews = useStore((state) => state.topSteamNews);

  const topTenNews = topNews
    .slice(0, 10)
    .map((newsItem: SteamNewsItem, index) => {
      return <NewsItem key={index} newsItem={newsItem}/>;
    });
  
  
  return <>{topTenNews}</>;
};
