import fetch from "node-fetch";
import config from "../config";
import {
  selectSteamSpyTopGamesTwoWeeks,
  steamUpdateAllGames,
} from "./mssqlModel";

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

export async function getUserSteamGames(steamId: string) {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.steamApiKey}&steamid=${steamId}&format=json&include_played_free_games=true&include_appinfo=true`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getAllGames() {
  try {
    const response = await fetch(
      "http://api.steampowered.com/ISteamApps/GetAppList/v0002/"
    );
    const { applist } = await response.json();
    const recordsUpdated = await steamUpdateAllGames(applist.apps);

    return recordsUpdated;

  } catch (error) {
    throw error;
  }
}
