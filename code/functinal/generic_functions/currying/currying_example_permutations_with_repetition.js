const cartesianProduct = (xs, ys) => [].concat(...xs.map(x => [].concat(...ys.map(y => [[x].concat(y)]))));
const curry = f => a => b => f(a, b);
const fold  = (f, xs) => (xs.length > 0) ? xs.slice(1).reduce(f, xs[0]) : [];

const replicate = (n, a) => {
  let v = [a];
  let o = [];
  if (n < 1) return o;
  while (n > 1) {
    if (n & 1) o = o.concat(v);
    n >>= 1;
    v = v.concat(v);
  }
  return o.concat(v);
};

const permutationsWithRepetition = (n, as) => (as.length > 0 ? (fold(curry(cartesianProduct)(as), replicate(n, as))) : []);

console.log(
    // ==>
    // [ [ 1, 1 ],
    //   [ 1, 2 ],
    //   [ 1, 3 ],
    //   [ 2, 1 ],
    //   [ 2, 2 ],
    //   [ 2, 3 ],
    //   [ 3, 1 ],
    //   [ 3, 2 ],
    //   [ 3, 3 ] ]
    permutationsWithRepetition(2, [1, 2, 3])
);