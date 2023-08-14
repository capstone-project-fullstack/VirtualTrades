import axios from "axios";

export const GET = async (): Promise<Response> => {
  const finnhubApiKey: string | undefined = process.env.FINNHUB_API_KEY;

  if (!finnhubApiKey) {
    return new Response(JSON.stringify({ error: "Finnhub API key missing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`
    );
    return new Response(JSON.stringify(response.data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return new Response(JSON.stringify({ error: "Error fetching news" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
