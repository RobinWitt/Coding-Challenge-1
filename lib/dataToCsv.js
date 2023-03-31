// function adapted from this resource:
// https://dev.to/samueldjones/convert-an-array-of-objects-to-csv-string-in-javascript-337d

export default function artistsDataToCsv(array) {
  const csvString = [
    [
      '"Artist Name"',
      '"MBID"',
      '"Artist URL"',
      '"Small Image URL"',
      '"Large Image URL"',
    ],
    ...array.map((item) =>
      [
        item.name,
        item.mbid,
        item.url,
        item.imageSmallUrl,
        item.imageLargeUrl,
      ].map((element) => `"${element.toString().replace(/"/g, '"')}"`)
    ),
  ]
    .map((element) => element.join(","))
    .join("\n");

  // download element

  const element = document.createElement("a");
  element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);
  element.target = "_blank";
  element.download = "export.csv";
  element.click();
}
