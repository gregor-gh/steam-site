import fetch from "node-fetch";
import config from "../config";
import {
  selectSteamSpyTopGamesTwoWeeks,
  mergeSteamUserOwnedGames,
  updateAllSteamGames,
  updateSteamUserRecentlyPlayed,
  selectSteamUserRecentlyPlayed,
  mergeSteamUserAchievements,
} from "./mssqlModel";

// fetch the top news stories based on the steamspy top games two weeks list
export async function fetchTopNewsTwoWeeks() {
  try {
    const topGames = await selectSteamSpyTopGamesTwoWeeks();
    return fetchNewsForGameArray(topGames);
  } catch (error) {
    throw error;
  }
}

// // fetch the top news stories based on the user's recently played history
// export async function fetchUserNews(steamid: string) {
//   try {
//     const recentlyPlayedGames = await fetchSteamUserRecentlyPlayedGames(
//       steamid
//     );
//     fetchNewsForGameArray(recentlyPlayedGames.response.games);
//   } catch (error) {
//     throw error;
//   }
// }

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

        // If achievements were found, log to database
        if (userSingleGameAchievements.playerstats.success === true) {
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
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.steamApiKey}&steamid=${steamId}&format=json&include_played_free_games=true&include_appinfo=true`
  );
  const data = await response.json();
  return data;
}

// fetch and return a given user's recently played games
async function fetchSteamUserRecentlyPlayedGames(steamId: string) {
  const response = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${config.steamApiKey}&steamid=${steamId}&format=json&include_played_free_games=true`
  );

  const data: SteamGetRecentlyPlayedGames = await response.json();
  return data;
}

// fetch and update SQL database with the entire steam catalogue
export async function getAllGames() {
  try {
    const response = await fetch(
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
    const response = await fetch(
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
    const response = await fetch(
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
