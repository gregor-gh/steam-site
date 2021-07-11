import create from "zustand";

interface StoreState {
  topGameList: SteamSpyGameList[];
  setTopGameList: () => Promise<void>;
  topGameListLoading: boolean;
  topSteamNews: SteamNewsItem[];
  setTopSteamNews: () => Promise<void>;
  topSteamNewsLoading: boolean;
}

const useStore = create<StoreState>((set) => ({
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
