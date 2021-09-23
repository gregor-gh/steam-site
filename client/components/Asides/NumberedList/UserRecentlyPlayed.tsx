import { NumberedList } from ".";
import useStore from "../../useStore";

export const UserRecentlyPlayed = () => {
  const { userRecentlyPlayedList, userRecentlyPlayedListLoading } = useStore(
    (state) => state
  );

  return (
    <NumberedList
      heading="🎮 You've been playing"
      list={userRecentlyPlayedList}
      listLoading={userRecentlyPlayedListLoading}
    />
  );
};
