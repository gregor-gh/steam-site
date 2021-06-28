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

type SteamResponseFormat = "json" | "xml" | "vdf";
