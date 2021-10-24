export const unixtoDateString = (unixTime: number) =>
  new Date(unixTime * 1000).toDateString();
