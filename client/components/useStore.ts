import create from "zustand";
import { DbSteamUser } from "../../@types/database";

interface StoreState {
  isLoggedIn: boolean | null;
  setIsLoggedIn: (flag: boolean) => void;
  steamProfile: DbSteamUser | null;
  setSteamProfile: (profile: DbSteamUser) => void;
  topGameList: SteamSpyGameList[];
  setTopGameList: () => Promise<void>;
  topGameListLoading: boolean;
  topSteamNews: SteamNewsItem[];
  setTopSteamNews: () => Promise<void>;
  topSteamNewsLoading: boolean;
}

const useStore = create<StoreState>((set) => ({
  isLoggedIn: null,
  setIsLoggedIn: (flag) => set({ isLoggedIn: flag }),
  steamProfile: null,
  setSteamProfile: (profile) => set({ steamProfile: { ...profile } }),
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
}));

export default useStore;
