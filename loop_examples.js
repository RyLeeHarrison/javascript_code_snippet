const dummyMap = require('./dummy_data/dummyMap')
const dummyObject = require('./dummy_data/dummyObject')

const loops = {
  object: {
    keys: (obj) => {
      Object.keys(obj)
        .forEach((key, index) => console.log(key, obj[key]))
    },
    entries: (obj) => {
      for (const [key, value] of Object.entries(obj)) {
        console.log(key, value)
      }
    }
  },
  map: {
    forEach: (map) => {
      map.forEach((value, key) => console.log(key, value))
    },
    forEachGet: (map) => {
      map.forEach((value, key) => console.log(key, map.get(key)))
    }
  }
}

// loops.map.forEach(dummyMap)
loops.map.forEachGet(dummyMap)
// loops.object.keys(dummyObject)
loops.object.entries(dummyObject)
