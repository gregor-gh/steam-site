import { IRecordSet } from "mssql";
import fetch from "node-fetch";
import { SteamSpyGameListBasic } from "../../@types/database";
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

// fetch the top news stories based on the steamspy top games two weeks list
export async function fetchTopNewsTwoWeeks() {
  try {
    const topGames = await selectSteamSpyTopGamesTwoWeeks();
    return fetchNewsForGameArray(topGames);
  } catch (error) {
    throw error;
  }
}

// fetch the top news stories based on the user's recently played history
export async function fetchUserNews(steamid: string) {
  try {
    const recentlyPlayedGames = await fetchUserRecentlyPlayedGames(steamid);
    fetchNewsForGameArray(recentlyPlayedGames.response.games);
  } catch (error) {
    throw error;
  }
}

// fetch news stories from steam based on a game list passed in
async function fetchNewsForGameArray(
  gameList: IRecordSet<SteamSpyGameListBasic> | SteamUserGameListItem[]
) {
  try {
    const topNewsItems = await Promise.all(
      gameList.map(
        async (item: SteamSpyGameListBasic | SteamUserGameListItem) => {
          const steamNews = await fetchNewsForApp(item.appid, 1);
          const steamNewsItems = steamNews.newsitems;
          return steamNewsItems;
        }
      )
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

// function to fetch a user's recently played games from steam
async function fetchUserRecentlyPlayedGames(
  steamid: string
): Promise<SteamGetRecentlyPlayedGames> {
  try {
    const response = await fetch(
      `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${config.steamApiKey}&steamid=${steamid}&format=json`
    );
    const recentlyPlayedGames: SteamGetRecentlyPlayedGames = await response.json();
    return recentlyPlayedGames;
  } catch (error) {
    throw error;
  }
}

// function to fetch newstories for a given app from steam
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
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.steamApiKey}&steamid=${steamId}&format=json&include_played_free_games=true`
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
