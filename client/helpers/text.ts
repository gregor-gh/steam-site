export function stripHtmlFromString(content: string) {
  const document = new DOMParser().parseFromString(content, "text/html"); // strip out html
  const textContent = document.body.textContent || ""; // replace with empty string if requried
  const removeSquareBrackets = textContent.replace(/\[[^[]*\]/, "");
  return removeSquareBrackets.replace(/\S*.jpg|\S*.png|{\S*/g, ""); // remove images/steam clan links
}

export function dangerouslyAddHtmlToSteamContents(content: string) {
  if (!content) return "";

  return content
    .replaceAll("<script", "")
    .replaceAll("[script", "")
    .replaceAll("[*]", "<br/>")
    .replaceAll("[", "<")
    .replaceAll("]", ">");
}
