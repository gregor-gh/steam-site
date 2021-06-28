export function stripHtmlFromString(content: string) {
  const document = new DOMParser().parseFromString(content, "text/html");
  const textContent = document.body.textContent || "";
  return textContent.replace(/\S*.jpg/, "");
}
