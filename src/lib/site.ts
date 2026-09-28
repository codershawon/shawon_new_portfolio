// Site-এর পুরো ঠিকানা (URL) এক জায়গায়।
// ১. SITE_URL দেওয়া থাকলে সেটা (domain কেনার পর Vercel-এ বসাবেন)
// ২. না থাকলে Vercel নিজে যে production ঠিকানা দেয়
// ৩. তাও না থাকলে নিজের computer
function getSiteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteUrl = getSiteUrl();

// "/about" → "https://example.com/about"
export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}