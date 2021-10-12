type SteamPhoto = {
  value: string;
};

type SteamUser = {
  _json?: {
    avatar: string;
    avatarfull: string;
    avatarhash: string;
    avatarmedium: string;
    commentpermission: number;
    communityvisibilitystate: number;
    lastlogoff: number;
    personaname: string;
    personastate: number;
    personastateflags: number;
    primaryclanid: string;
    profilestate: number;
    profileurl: string;
    realname: string;
    steamid: string;
    timecreated: number;
  };
  displayName: string;
  id: string;
  photos?: SteamPhoto[];
  provider?: string;
};

type SteamNewsItem = {
  gid: string;
  title: string;
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  date: date;
  feedname: string;
  feed_type: number;
  appid: number;
  tags?: string[];
};

type SteamGetNewsForApp = {
  appid: string;
  newsitems: SteamNewsItem[];
  count: number;
};

type SteamGameListItem = {
  appid: string;
  name: string;
};

type SteamUserGameListItem = {
  appid: string;
  name?: string;
  playtime_2weeks?: number;
  playtime_forever: number;
  img_icon_url?: string;
  img_logo_url?: string;
  playtime_windows_forever: string;
  playtime_mac_forever: string;
  playtime_linux_forever: string;
};

type SteamGetOwnedGames = {
  response: {
    game_count: number;
    games: SteamUserGameListItem[];
  };
};

type SteamGetRecentlyPlayedGames = {
  response: {
    total_count: number;
    games: SteamUserGameListItem[];
  };
};

type SteamGetPlayerAchievement = {
  apiname: string;
  achieved: number;
  unlocktime: number;
  name: string;
  description: string;
};

type SteamGetPlayerAchievements = {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: SteamGetPlayerAchievement[];
    success: true;
  };
};

type SteamGetPlayerAchievementsFail = {
  playerstats: {
    error: string;
    success: false;
  };
};

type SteamGetGlobalAchPercent = {
  name: string;
  percent: number;
};

type SteamGetGlobalAchPercentForApp = {
  achievementpercentages: {
    achievements: SteamGetGlobalAchPercent[];
  };
};

type SteamResponseFormat = "json" | "xml" | "vdf";
