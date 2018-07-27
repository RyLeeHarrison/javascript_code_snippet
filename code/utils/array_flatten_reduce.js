const array = [[1, 2, 12], [2, 3], [1, 10]]

const flattenArray = (v) => v.reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
    return flatten;
});

console.log(flattenArray(array))