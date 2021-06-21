import fetch from "node-fetch";

export async function fetchTopGamesTwoWeeks() {
  try {
    const response = await fetch(
      "https://steamspy.com/api.php?request=top100in2weeks"
    );
    const gamesObject: SteamSpyGameListJson = await response.json();
    const gamesArray = Object.values(gamesObject);
    const sortedGamesArray = gamesArray.sort(
      (a, b) => b.ccu - a.ccu
    );
    return sortedGamesArray;
  } catch (err) {
    throw err;
  }
}
