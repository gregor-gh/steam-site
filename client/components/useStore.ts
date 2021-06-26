import create from "zustand";

interface StoreState {
  topGameList: SteamSpyGameList[],
  setTopGameList: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  topGameList: [],
  setTopGameList: async () => {
    const response = await fetch("/api/steam/top-games-two-weeks");
    set({ topGameList: await response.json() });
  }
}));

export default useStore;