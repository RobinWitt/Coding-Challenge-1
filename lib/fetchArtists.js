import listRandomArtists from "./listRandomArtists";

export default async function handleSearchArtists(searchedArtist) {
  try {
    const response = await fetch("/api/searchArtist", {
      method: "POST",
      body: JSON.stringify(searchedArtist),
    });

    if (response.status === 201) {
      const data = await response.json();
      // takes the api response data and restructures it
      const searchResults = data.results.artistmatches.artist;
      const mappedResults = searchResults.map(({ name, mbid, url, image }) => {
        const [imageSmall] = image.filter((image) => image.size === "small");
        const imageSmallUrl = imageSmall["#text"];
        const [imageLarge] = image.filter((image) => image.size === "large");
        const imageLargeUrl = imageLarge["#text"];

        return { name, mbid, url, imageSmallUrl, imageLargeUrl };
      });

      return mappedResults;
    } else if (response.status === 202) {
      const data = await response.json();
      // takes the response local data and creates an array with five random artists
      const randomArtists = [];
      listRandomArtists(data.artists, randomArtists);

      return randomArtists;
    } else {
      console.error("AN ERROR OCCURED");
    }
  } catch (error) {
    console.error("CONNECTION FAILED");
  }
}
