import { response } from "express";
import create from "zustand";
import { DbSteamUser, DbSteamUserRecentlyPlayed } from "../../@types/database";

type SetStatePromise = () => Promise<void>;

interface StoreState {
  // User
  isLoggedIn: boolean | null;
  setIsLoggedIn: (flag: boolean) => void;
  steamProfile: DbSteamUser | null;
  setSteamProfile: (profile: DbSteamUser) => void;

  // Top game list
  topGameList: SteamSpyGameList[];
  setTopGameList: SetStatePromise;
  topGameListLoading: boolean;

  // Top steam news
  topSteamNews: SteamNewsItem[];
  setTopSteamNews: SetStatePromise;
  topSteamNewsLoading: boolean;

  // User recently played list
  userRecentlyPlayedList: DbSteamUserRecentlyPlayed[];
  setUserRecentlyPlayedList: SetStatePromise;
  userRecentlyPlayedListLoading: boolean;
}

const useStore = create<StoreState>((set) => ({
  // User
  isLoggedIn: null,
  setIsLoggedIn: (flag) => set({ isLoggedIn: flag }),
  steamProfile: null,
  setSteamProfile: (profile) => set({ steamProfile: { ...profile } }),

  // Top game list
  topGameList: [],
  setTopGameList: async () => {
    try {
      const response = await fetch("/api/steam/top-games-two-weeks");
      set({ topGameList: await response.json(), topGameListLoading: false });
    } catch (error) {
      // do nothing
    }
  },
  topGameListLoading: true,

  // Top steam news
  topSteamNews: [],
  setTopSteamNews: async () => {
    try {
      const response = await fetch("/api/steam/top-news-two-weeks");
      set({ topSteamNews: await response.json(), topSteamNewsLoading: false });
    } catch (error) {
      // do nothing
    }
  },
  topSteamNewsLoading: true,

  // User recently played
  userRecentlyPlayedList: [],
  setUserRecentlyPlayedList: async () => {
    try {
      const response = await fetch("/api/steam/steam-user-recently-played");
      set({
        userRecentlyPlayedList: await response.json(),
        userRecentlyPlayedListLoading: false,
      });
    } catch (error) {
      // do nothing
    }
  },
  userRecentlyPlayedListLoading: true,
}));

export default useStore;
