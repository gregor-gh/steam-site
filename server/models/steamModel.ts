import fetch from "node-fetch";
import { selectSteamSpyTopGamesTwoWeeks } from "./mssqlModel";

export async function fetchTopGamesTwoWeeks() {
  try {
    const response = await fetch(
      "https://steamspy.com/api.php?request=top100in2weeks"
    );
    const gamesObject: SteamSpyGameListJson = await response.json();
    const gamesArray = Object.values(gamesObject);
    return gamesArray;
  } catch (err) {
    throw err;
  }
}

export async function fetchTopNewsTwoWeeks() {
  try {
    const topGames = await selectSteamSpyTopGamesTwoWeeks();
    const topNewsItems = await Promise.all(
      topGames.map(async (item) => {
        const steamNews = await fetchNewsForApp(item.appid, 1);
        const steamNewsItems = steamNews.newsitems;
        return steamNewsItems;
      })
    ).catch((error) => {
      throw error;
    });

    const topNewsArray: SteamNewsItem[] = [].concat(...(topNewsItems as []));
    const topNewsSortedArray = topNewsArray.sort((a, b) => {
      return b.date - a.date;
    });

    return topNewsSortedArray;
  } catch (err) {
    throw err;
  }
}

async function fetchNewsForApp(
  appid: number,
  count: number = 3,
  maxlength: number = 300,
  format: SteamResponseFormat = "json"
): Promise<SteamGetNewsForApp> {
  try {
    const response = await fetch(
      `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=${maxlength}&format=${format}`
      //"api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json"
    );
    const { appnews } = await response.json();
    return appnews;
  } catch (error) {
    //return Promise.reject("REJECT")
    throw error;
  }
}
