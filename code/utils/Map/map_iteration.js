const dummyMap = require('../dummy_data/dummyMap');

function forEachGet(map) {
  const lookup = key => map.get(key);

  map.forEach((value, key) => {
    Array.isArray(value)
      ? console.log(lookup(key))
      : console.log(key, value);
  });
}

function forEach(map) {
  map.forEach((value, key) => console.log(key, value));
}

forEachGet(dummyMap);
forEach(dummyMap);