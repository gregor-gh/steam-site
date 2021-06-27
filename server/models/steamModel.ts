import fetch from "node-fetch";
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
    //const topGames = await fetchTopGamesTwoWeeks();
    // const tester = topGames.splice(0, 10);
    // tester.map(async(game) => {
    //     try {
    //               const test3 = await fetchNewsForApp(game.appid).catch((err) => {
    //                 throw err;
    //               });
    //     } catch (err) {
    //       throw err;
    //     }

    //   })

    //const topGames = await fetchTopGamesTwoWeeks();

    // Promise.all(
    //   [1, 2, 3].map((game) => {
    //     try {
    //       return fetch(buildGetNewsForAppUrl(440));
    //     } catch (error) {
    //       throw error;
    //     }
    //   })
    // )
    //   .then((response) => console.log(response))
    //   .catch((err) => {
    //     console.log(err);
    //     throw err
    //   });

    //const test = await fetchNewsForApp(440);
    const topGames = [1, 2, 3];
    const test = await Promise.all(
      topGames.splice(0, 3).map(async (item) => {
        const response = await fetchNewsForApp(440);
        const { appnews } = await response.json();
        return appnews;
      })
    ).catch((error) => {
      console.log("caught promise");
      throw error;
    });
    console.log(test);
    return test;
    //throw test;

    // const test = await fetchNewsForApp(
    //   440
    //   //`api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=${maxlength}&format=${format}`
    //   //"api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json"
    // );
  } catch (err) {
    console.log("outer catch");
    //return Promise.reject();
    throw err;
  }
}

// function buildGetNewsForAppUrl(
//   appid: number,
//   count: number = 3,
//   maxlength: number = 300,
//   format: SteamResponseFormat = "json"
// ) {
//   return `api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=${maxlength}&format=${format}`;
//   //"api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json"
// }

function fetchNewsForAppworking(
  appid: number,
  count: number = 3,
  maxlength: number = 300,
  format: SteamResponseFormat = "json"
) {
  return fetch(
    `api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=${maxlength}&format=${format}`
    //"api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json"
  );
}

function fetchNewsForApp(
  appid: number,
  count: number = 3,
  maxlength: number = 300,
  format: SteamResponseFormat = "json"
) {
  try {
    return fetch(
      `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=${maxlength}&format=${format}`
      //"api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json"
    );
  } catch (error) {
    //return Promise.reject("REJECT")
    throw error;
  }
}

// async function fetchNewsForApp(
//   appid: number,
//   count: number = 3,
//   maxlength: number = 300,
//   format: SteamResponseFormat = "json"
// ) {
//   try {
//     const test= await fetch(
//       `api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=${maxlength}&format=${format}`
//       //"http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json"
//     ).then(response => { return response.json() }).catch(err => {
//       console.error(err)
//       throw new Error("InvalidMonthNo");
//     }).catch(err => { throw new Error(err); });
//     // return axios.get(
//     //   `api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=${maxlength}&format=${format}`
//     // );
//   } catch (err) {
//     throw new Error(err);
//   }
// }
