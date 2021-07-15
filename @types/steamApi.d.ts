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
    N;
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

type SteamResponseFormat = "json" | "xml" | "vdf";
