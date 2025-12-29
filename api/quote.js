export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.quotable.io/random?tags=hope|inspirational|life",
      { cache: "no-store" }
    );

    const data = await response.json();

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.status(200).json({
      text: data.content,
      author: data.author,
    });
  } catch (error) {
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({
 text: "Cancer is a word, not a sentence. With hope, strength, and support, healing becomes possible.",
  author: "Care & Support Community",
    });
  }
}
