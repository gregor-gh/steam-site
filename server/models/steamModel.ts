import fetch from "node-fetch";
import config from "../config";
import {
  selectSteamSpyTopGamesTwoWeeks,
  mergeSteamUserOwnedGames,
  updateAllSteamGames,
  updateSteamUserRecentlyPlayed,
  selectSteamUserRecentlyPlayed,
  mergeSteamUserAchievements,
  returnAllSteamGamesWithAchievements,
  updateSteamGameGlobalAchs,
  selectSteamGameAchievements,
} from "./mssqlModel";

let STEAM_API_CALL_COUNT = 0;

function makeSteamApiCall(url: string) {
  STEAM_API_CALL_COUNT++;
  if (STEAM_API_CALL_COUNT % 10 === 0) {
    console.log(`Steam API Count: ${STEAM_API_CALL_COUNT} ${url}`);
  }
  return fetch(url);
}

// fetch the top news stories based on the steamspy top games two weeks list
export async function fetchTopNewsTwoWeeks() {
  try {
    const topGames = await selectSteamSpyTopGamesTwoWeeks();
    // filter to top 20 games to reduce on API calls
    return fetchNewsForGameArray(topGames.filter((_game, index) => index < 20));
  } catch (error) {
    throw error;
  }
}

// fetch news stories from steam based on a game list passed in
async function fetchNewsForGameArray(gameList: { appid: number }[]) {
  try {
    const topNewsItems = await Promise.all(
      gameList.map(async (item) => {
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

// function to fetch newstories for a given app from steam
async function fetchNewsForApp(
  appid: string | number,
  count: number = 3,
  maxlength: number = 0,
  format: SteamResponseFormat = "json"
): Promise<SteamGetNewsForApp> {
  try {
    const response = await makeSteamApiCall(
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

export async function fetchSteamSingleGameNews(appid: string) {
  const singleGameNews = await fetchNewsForApp(appid, 20);
  return singleGameNews.newsitems;
}

export async function downloadUserSteamGames(steamId: string) {
  try {
    // first fetch user's owned games and add to database
    const steamUserOwnedGames = await fetchSteamUserOwnedGames(steamId);
    if (steamUserOwnedGames?.response?.game_count > 0) {
      await mergeSteamUserOwnedGames(
        steamUserOwnedGames.response.games,
        steamId
      );
    }

    // then fetch recently played games to update the 2 week playtime
    const steamRecentlyPlayedGames = await fetchSteamUserRecentlyPlayedGames(
      steamId
    );

    // If any games are found
    if (steamRecentlyPlayedGames?.response?.total_count > 0) {
      await updateSteamUserRecentlyPlayed(
        steamRecentlyPlayedGames.response.games,
        steamId
      );
    }

    // Next loop through the user's owned games and update achivements
    Promise.all(
      steamUserOwnedGames.response.games.map(async (game) => {
        const appid = game.appid;
        const userSingleGameAchievements = await fetchSteamGameUserAchs(
          appid,
          steamId
        );

        // if achievements were found, pass back up to be logged to database
        if (userSingleGameAchievements.playerstats.success) {
          const userSingleGameAchievementsWithAppId = {
            ...(userSingleGameAchievements as SteamGetPlayerAchievements),
            appid,
          } as SteamGetPlayerAchievementsWithAppId;

          return userSingleGameAchievementsWithAppId;
        }
      })
    ).then(async (gameArray) => {
      if (gameArray.length > 0) {
        const filteredGameArray = gameArray.filter(
          (game) => game !== undefined
        ) as SteamGetPlayerAchievementsWithAppId[];
        await mergeSteamUserAchievements(filteredGameArray);
      }
    });
  } catch (error) {
    throw error; // throw to controller
  }
}

// fetch and reutrn a given user's owned games
export async function fetchSteamUserOwnedGames(
  steamId: string
): Promise<SteamGetOwnedGames> {
  const response = await makeSteamApiCall(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.steamApiKey}&steamid=${steamId}&format=json&include_played_free_games=true&include_appinfo=true`
  );
  const data = await response.json();
  return data;
}

// fetch and return a given user's recently played games
async function fetchSteamUserRecentlyPlayedGames(steamId: string) {
  const response = await makeSteamApiCall(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${config.steamApiKey}&steamid=${steamId}&format=json&include_played_free_games=true`
  );

  const data: SteamGetRecentlyPlayedGames = await response.json();
  return data;
}

// fetch and update SQL database with the entire steam catalogue
export async function getAllGames() {
  try {
    const response = await makeSteamApiCall(
      "http://api.steampowered.com/ISteamApps/GetAppList/v0002/"
    );
    const { applist } = await response.json();
    const recordsUpdated = await updateAllSteamGames(applist.apps);

    return recordsUpdated;
  } catch (error) {
    throw error;
  }
}

// fetch news items based on a user's recently played game list
export async function fetchSteamUserRecentlyPlayedGamesNews(steamId: string) {
  try {
    const recentlyPlayedGames = await selectSteamUserRecentlyPlayed(steamId);

    const recentlyPlayedGameNews = await fetchNewsForGameArray(
      recentlyPlayedGames
    );

    return recentlyPlayedGameNews;
  } catch (error) {
    throw error;
  }
}

export async function fetchSteamGameGlobalAchs(
  appid: string
): Promise<SteamGetGlobalAchPercentForApp> {
  try {
    const response = await makeSteamApiCall(
      `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appid}&format=json&l=english`
    );
    const globalAchs = await response.json();

    if (Object.keys(globalAchs)?.length > 0) {
      // failures will return an empty object so check for this
      return globalAchs;
    } else {
      throw new Error("Game not found.");
    }
  } catch (error) {
    throw error; // throw back up to controller
  }
}

export async function fetchSteamGameUserAchs(
  appid: string,
  steamId: string = config.steamDemoUserId // use demo user if no user is passed
): Promise<SteamGetPlayerAchievements | SteamGetPlayerAchievementsFail> {
  try {
    const response = await makeSteamApiCall(
      `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${config.steamApiKey}&steamid=${steamId}&l=english`
    );
    const userAchievements:
      | SteamGetPlayerAchievements
      | SteamGetPlayerAchievementsFail = await response.json();
    return userAchievements;
  } catch (error) {
    throw error; // throw back up to controller.
  }
}

export async function updateAllSteamGameGlobalAchs() {
  try {
    const gameList = await returnAllSteamGamesWithAchievements();

    // Next loop through the user's owned games and update achivements
    Promise.all(
      gameList.map(async (game) => {
        const appid = game.appid;
        const achievements = await fetchSteamGameGlobalAchs(appid);

        // if achievements were found, pass back up to be logged to database
        if (achievements.achievementpercentages) {
          const achievementsWithAppId = {
            ...achievements,
            appid,
          } as SteamGetGlobalAchPercentWithAppId;

          return achievementsWithAppId;
        }
      })
    ).then(async (gameArray) => {
      if (gameArray.length > 0) {
        const filteredGameArray = gameArray.filter(
          (game) => game !== undefined
        ) as SteamGetGlobalAchPercentWithAppId[];
        await updateSteamGameGlobalAchs(filteredGameArray);
      }
    });
  } catch (error) {
    throw error;
  }
}

export async function selectOrFetchSteamGameAchievements(
  appid: string,
  steamid?: string
) {
  // First check that game achievements exist in database
  const gameAchievements = await selectSteamGameAchievements(appid, steamid);

  // If achievements are found then return
  if (gameAchievements.length > 0) return gameAchievements;

  // If not then fetch and add
  if (gameAchievements.length === 0) {
    const userGameAchs = await fetchSteamGameUserAchs(appid, steamid);
    const globalAchs = await fetchSteamGameGlobalAchs(appid);

    // check if the achievement retrieve was a success and push to array
    if (userGameAchs.playerstats.success) {
      const userGameAchArray = [] as SteamGetPlayerAchievementsWithAppId[];
      userGameAchArray.push({
        ...(userGameAchs as SteamGetPlayerAchievements),
        appid,
      });

      // update to database
      await mergeSteamUserAchievements(userGameAchArray);

      if (globalAchs.achievementpercentages) {
        // now do the same for globalAchs
        const globalGameAchArray = [] as SteamGetGlobalAchPercentWithAppId[];
        globalGameAchArray.push({ ...globalAchs, appid });

        await updateSteamGameGlobalAchs(globalGameAchArray, appid);
      }

      // now return the achievements
      return await selectSteamGameAchievements(appid, steamid);
    }
  }
}
