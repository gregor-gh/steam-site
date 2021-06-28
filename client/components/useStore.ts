import create from "zustand";

interface StoreState {
  topGameList: SteamSpyGameList[];
  setTopGameList: () => Promise<void>;
  topSteamNews: [];
  setTopSteamNews: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  topGameList: [],
  setTopGameList: async () => {
    try {
      const response = await fetch("/api/steam/top-games-two-weeks");
      set({ topGameList: await response.json() });
    } catch (error) {
      // do nothing
    }
  },
  topSteamNews: [],
  setTopSteamNews: async () => {
    try {
      const response = await fetch("/api/steam/top-news-two-weeks");
    } catch (error) {
      // do nothing
    }
  },
}));

export default useStore;
