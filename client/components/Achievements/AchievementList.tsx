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


  return (
    <>{steamGameAchievementsLoading ? <div>loading</div> : <Achievement />}</>
  );
};
