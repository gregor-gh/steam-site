import { useEffect } from "react";
import { Achievement } from ".";
import useStore from "../useStore";
import { LoadingNewsItem } from "../Loading";
import "./AchievementList.css";

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

  // TODO Make this look better
  const noAchievementsFound = (
    <div className="no-achievements" >
      This game either has no achievements or we do not currently have a user that owns the game in our database. 😭 
    </div>
  );

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
      ) : steamGameAchievements.length > 0 ? (
        achievementList
      ) : (
        noAchievementsFound
      )}
    </>
  );
};
