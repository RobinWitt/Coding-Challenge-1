export default function listRandomArtists(data, array) {
  while (array.length < 5) {
    const randomArtist = data[Math.floor(Math.random() * data.length)];
    if (!array.includes(randomArtist)) {
      array.push(randomArtist);
    }
  }
}
