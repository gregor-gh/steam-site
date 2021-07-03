export function stripHtmlFromString(content: string) {
  const document = new DOMParser().parseFromString(content, "text/html"); // strip out html
  const textContent = document.body.textContent || ""; // replace with empty string if requried
  return textContent.replace(/\S*.jpg|\S*.png|{\S*/g, ""); // remove images/steam clan links
}
