export default async function handler(request, response) {
  const ARTIST = request.body;
  switch (request.method) {
    case "POST": {
      const lastFmResponse = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${ARTIST}&api_key=${process.env.API_KEY}&format=json`
      );

      if (lastFmResponse.ok) {
        const data = await lastFmResponse.json();
        return response.status(201).json(data);
      }
      return response.status(404).json({ status: "COULD NOT FIND ARTISTS" });
    }
    default: {
      return response.status(405).json({ status: "METHOD NOT ALLOWED" });
    }
  }
}
