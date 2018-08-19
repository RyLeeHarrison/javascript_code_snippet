const object = {
  hello: 'world',
  first: 'Bob',
  name: {
    first: 'RyLee'
  }
};

const depthFirstSearch = (needle, haystack, found = []) => {
  Object.keys(haystack).forEach(key => {
    (key === needle) ? found.push(haystack[key]) : found;

    if (typeof haystack[key] === 'object')
      depthFirstSearch(needle, haystack[key], found);

  });

  return found;
};

console.log(depthFirstSearch('first', object)); // ==> [ 'Bob', 'RyLee' ]