export default async function handler(req, res) {
  const wpUrl = `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/pages`;

  try {
    const response = await fetch(wpUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ error: 'Failed to fetch WP API' });
  }
}
