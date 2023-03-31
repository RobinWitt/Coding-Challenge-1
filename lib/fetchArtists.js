export default async function handleSearchArtists(searchedArtist) {
  try {
    const response = await fetch("/api/searchArtist", {
      method: "POST",
      body: JSON.stringify(searchedArtist),
    });
    if (response.ok) {
      const data = await response.json();
      const searchResults = data.results.artistmatches.artist;
      const mappedResults = searchResults.map(({ name, mbid, url, image }) => {
        const [imageSmall] = image.filter((image) => image.size === "small");
        const imageSmallUrl = imageSmall["#text"];
        const [imageLarge] = image.filter((image) => image.size === "large");
        const imageLargeUrl = imageLarge["#text"];

        return { name, mbid, url, imageSmallUrl, imageLargeUrl };
      });

      return mappedResults;
    } else {
      console.error("AN ERROR OCCURED");
    }
  } catch (error) {
    console.error("CONNECTION FAILED");
  }
}
