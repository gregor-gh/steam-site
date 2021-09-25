type SteamPhoto = {
  value: string;
};

interface SteamUser {
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
}

interface SteamNewsItem {
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
  tags?: string[]
}

interface SteamGetNewsForApp {
  appid: number;
  newsitems: SteamNewsItem[];
  count: number;
}

interface SteamGameListItem {
  appid: number;
  name: string;
}

interface SteamUserGameListItem {
  appid: number;
  name?: string;
  playtime_2weeks?: number;
  playtime_forever: number;
  img_icon_url?: string;
  img_logo_url?: string;
  playtime_windows_forever: string;
  playtime_mac_forever: string;
  playtime_linux_forever: string;
}

interface SteamGetOwnedGames {
  response: {
    game_count: number;
    games:SteamUserGameListItem[];
  }
}

interface SteamGetRecentlyPlayedGames {
  response: {
    total_count: number;
    games: SteamUserGameListItem[];
  };
}

type SteamResponseFormat = "json" | "xml" | "vdf";
