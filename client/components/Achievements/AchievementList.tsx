import React, { useEffect } from "react";
import { Achievement } from ".";
import useStore from "../useStore";

export const AchievementList = ({ appid }: { appid: string }) => {
  const {
    steamGameAchievements,
    setSteamGameAchievements,
    steamGameAchievementsLoading,
  } = useStore((state) => state);

  useEffect(() => {
    setSteamGameAchievements(appid);
  }, []);

  useEffect(() => {
    console.log(steamGameAchievements);
  }, [steamGameAchievements]);

  const achievementList = steamGameAchievements
    .sort((a, b) => b.globalAchievementPercent - a.globalAchievementPercent)
    .map((achievement) => {
      return (
        <Achievement
          key={achievement.apiname}
          name={achievement.name}
          description={achievement.description}
          globalUnlock={achievement.globalAchievementPercent}
          unlocktime={achievement.unlocktime}
        />
      );
    });

  return (
    <>{steamGameAchievementsLoading ? <div>loading</div> : achievementList}</>
  );
};
