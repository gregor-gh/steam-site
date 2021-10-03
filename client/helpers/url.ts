export function getAppIdFromUrl(url: string) {
  const match = url.match(/\/game\/\d+/);
  // if an appid is found return it
  if (match) {
    return match[0].substring(6);
  }

  // otherwise return null
  return null;
}
