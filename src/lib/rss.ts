export default async function fetchLatestPodcast() {
  const feedUrl = 'https://feeds.captivate.fm/improvisdead/';
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching podcast:", error);
    return null;
  }
}
