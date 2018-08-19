
// Iterative
const keys = ['a', 'b', 'c'];
const values = [1, 2, 3];

const map = {};
for (let i = 0; i < keys.length; i += 1) 
  map[ keys[i] ] = values[i];


// Iterative Using Foreach
function arrToObj(keys, vals) {
  const map = {};
  keys.forEach((key, index) => {
    map[key] = val[index];
  });
  return map;
}

// Using Reduce
function arrToObj(keys, vals) {
  return keys.reduce((map, key, index) => {
    map[key] = vals[index];
    return map;
  }, {});
}