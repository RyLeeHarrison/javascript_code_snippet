const dummyObject = require('../dummy_data/dummyObject');

function forEachKeys(obj) {
  Object.keys(obj)
      .forEach((key, index) => console.log(key, obj[key]));
}

function forEntries(obj) {
  for (const [key, value] of Object.entries(obj))
    console.log(key, value);

}

forEachKeys(dummyObject);
forEntries(dummyObject);