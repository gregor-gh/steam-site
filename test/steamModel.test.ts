import { fetchSteamGameGlobalAchs } from "../server/models/steamModel";

test("fetchSteamGameGlobalAchs returns valid object", async () => {
  // arrange
  const appid = "1063730";

  //act
  const result = await fetchSteamGameGlobalAchs(appid);
  
  //assert
  expect(result).toHaveProperty("achievementpercentages");
  expect(result?.achievementpercentages).toHaveProperty("achievements");
});

test("fetchSteamGameGlobalAchs with invalid value returns error", async () => {
  // arrange
  const appid = "12345532534534";

  //act
  await expect(
    async () => await fetchSteamGameGlobalAchs(appid)
    //assert
  ).rejects.toThrow("Game not found.");
});
