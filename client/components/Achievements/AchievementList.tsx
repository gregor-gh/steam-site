import { useEffect } from "react";
import { Achievement } from ".";
import useStore from "../useStore";
import { LoadingNewsItem } from "../Loading";

export const AchievementList = ({ appid }: { appid: string }) => {
  const {
    steamGameAchievements,
    setSteamGameAchievements,
    steamGameAchievementsLoading,
    setSteamGameAchievementsLoading,
  } = useStore((state) => state);

  useEffect(() => {
    setSteamGameAchievementsLoading(true);
    setSteamGameAchievements(appid);
  }, []);

  const achievementList = steamGameAchievements
    .filter((achievement) => achievement.appid == appid)
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
    <>
      {steamGameAchievementsLoading ? (
        <>
          <LoadingNewsItem />
          <LoadingNewsItem />
          <LoadingNewsItem />
          <LoadingNewsItem />
          <LoadingNewsItem />
        </>
      ) : 
          steamGameAchievements.length>0?
        achievementList:"No achievements found"
        
      
      }
    </>
  );
};
