import { response } from "express";
import create from "zustand";
import {
  DbSteamSingleGameAchievements,
  DbSteamUser,
  DbSteamUserRecentlyPlayed,
} from "../../@types/database";

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

  // User recently played news
  recentlyPlayedNews: SteamNewsItem[];
  setRecentlyPlayedNews: SetStatePromise;
  recentlyPlayedNewsLoading: boolean;

  // User recently played list
  userRecentlyPlayedList: DbSteamUserRecentlyPlayed[];
  setUserRecentlyPlayedList: SetStatePromise;
  userRecentlyPlayedListLoading: boolean;

  // Steam single game news
  steamSingleGameNews: SteamNewsItem[];
  setSteamSingleGamesNews: (appid: string) => Promise<void>;
  steamSingleGameNewsLoading: boolean;

  // Steam game achievements
  steamGameAchievements: DbSteamSingleGameAchievements[];
  setSteamGameAchievements: (appid: string) => Promise<void>;
  steamGameAchievementsLoading: boolean;
  setSteamGameAchievementsLoading: (flag: boolean) => void;
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

  // User recently played news
  recentlyPlayedNews: [],
  setRecentlyPlayedNews: async () => {
    try {
      const response = await fetch(
        "/api/steam/steam-user-recently-played-news"
      );
      set({
        recentlyPlayedNews: await response.json(),
        recentlyPlayedNewsLoading: false,
      });
    } catch (error) {
      // do nothing
    }
  },
  recentlyPlayedNewsLoading: true,

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

  // Steam single game news
  steamSingleGameNews: [],
  setSteamSingleGamesNews: async (appid) => {
    try {
      const response = await fetch(
        `/api/steam/steam-single-game-news/${appid}`
      );
      set({
        steamSingleGameNews: await response.json(),
        steamSingleGameNewsLoading: false,
      });
    } catch (error) {
      // do nothing
    }
  },
  steamSingleGameNewsLoading: true,

  // Steam game achievements
  steamGameAchievements: [],
  setSteamGameAchievements: async (appid) => {
    try {
      const response = await fetch(
        `/api/steam/steam-game-achievements/${appid}`
      );
      set({
        steamGameAchievements: await response.json(),
        steamGameAchievementsLoading: false,
      });
    } catch (error) {
      set({ steamGameAchievements: [], steamGameAchievementsLoading: false });
    }
  },
  steamGameAchievementsLoading: true,
  setSteamGameAchievementsLoading: (flag) => {
    set({ steamGameAchievementsLoading: flag });
  },
}));

export default useStore;
