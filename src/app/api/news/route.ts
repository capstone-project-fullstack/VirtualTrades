import axios from 'axios';

export const GET = async (): Promise<Response> => {
  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=general&token=${process.env.FINNHUB_API_KEY}`
    );
    return new Response(JSON.stringify(response.data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return new Response(JSON.stringify({ error: 'Error fetching news' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
