import artists from "../../../lib/artists.json";

export default async function handler(request, response) {
  const ARTIST = request.body;
  switch (request.method) {
    case "POST": {
      try {
        const lastFmResponse = await fetch(
          `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${ARTIST}&api_key=${process.env.API_KEY}&format=json`
        );

        if (lastFmResponse.ok) {
          const data = await lastFmResponse.json();
          if (data.results.artistmatches.artist.length === 0) {
            throw new Error("No results from API");
          } else {
            return response.status(201).json(data);
          }
        } else {
          throw new Error("Error fetching from API");
        }
      } catch (error) {
        console.error(error);
        console.log("Network Error: Retrieving local data instead");
        return response.status(202).json(artists);
      }
    }
    default: {
      return response.status(405).json({ status: "METHOD NOT ALLOWED" });
    }
  }
}
