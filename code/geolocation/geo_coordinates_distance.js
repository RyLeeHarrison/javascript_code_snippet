const distance = (
  [lat1, lon1],
  [lat2, lon2],
  unit = 'km',
  roundTo = 4
) => {
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  let dist = (
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) *
    Math.cos((Math.PI * (lon1 - lon2)) / 180)
  );

  if (dist > 1) dist = 1;

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = (dist * 60 * 1.1515);

  const conversionTable = {
    km: 1.609344,
    nm: 0.8684,
  };
  
  return (
    Math.round((conversionTable[unit] * dist) * Math.pow(10, roundTo)) /
    Math.pow(10, roundTo)
  );
}

const progressMade = (
  [dist1, dist2],
  [current1, current2],
  roundTo = 2
) => (
  Math.round((100 *
    (distance(current1, current2)-0) /
    (distance(dist1, dist2)-0)) *
    Math.pow(10, roundTo)) / Math.pow(10, roundTo)
);

const percent = progressMade(
  [ [32.9697, -96.80322], [29.46786, -98.53506] ], // destination cords
  [ [32.96, -96.80322],   [29.46786, -98.53506] ], // current cords
);

console.log(`Total distance between cords: ${distance([32.9697, -96.80322], [29.46786, -98.53506], 'km', 2)} km`);
console.log(`${percent}% of the distance traveled to destination`);
