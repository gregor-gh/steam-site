const IMG_WITH_STYLE = "<img style=max-width:100% ";

export function stripHtmlFromString(content: string) {
  const document = new DOMParser().parseFromString(content, "text/html"); // strip out html
  const textContent = document.body.textContent || ""; // replace with empty string if requried
  return textContent
    .replaceAll(/\[[^[]*\]/g, "") // remove steam formatting
    .replaceAll(/\S*.jpg|\S*.png|{\S*/g, ""); // remove images/steam clan links
}

function replaceSteamClanImage(original: string) {
  const originalWithoutClanImg = original
    .replace(">", "")
    .replace("{STEAM_CLAN_IMAGE}", "")
    .replace("</img>", "");
  const fullImg = ` src=https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans${originalWithoutClanImg} />`;
  return fullImg;
}

function replaceImgImages(original: string) {
  const originalWithoutImg = original.replaceAll(/<[^>]+>/g, "");
  return `${IMG_WITH_STYLE} src="${originalWithoutImg}"/>`;
}

export function dangerouslyAddHtmlToSteamContents(content: string) {
  if (!content) return "";

  const formatted = content
    .replaceAll("<script", "")
    .replaceAll("[script", "")
    .replaceAll("[*]", "<br/>")
    .replaceAll("[", "<")
    .replaceAll("]", ">")
    .replaceAll("<img", IMG_WITH_STYLE) // hardcode in a style to avoid image being shown at full size.
    .replaceAll(/>\W*{STEAM_CLAN_IMAGE}\S*/g, replaceSteamClanImage)
    .replaceAll(/<img.+<\/img>/g, replaceImgImages);

  return formatted;
}
