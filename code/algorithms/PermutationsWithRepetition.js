class PermutationsWithRepetition {
  constructor(n, as) {
    this.n = n;
    this.as = as;
  }

  init() {
    return this.as.length > 0 ? (
      this.fold(this.curry(this.cartesianProduct)(this.as), this.replicate(this.n, this.as))
    ) : [];
  }

  cartesianProduct(xs, ys) {
    return [].concat(...xs.map(x => [].concat(...ys.map(y => [
      [x].concat(y)
    ]))));
  }

  fold(f, xs) {
    return (xs.length > 0)
      ? xs.slice(1)
          .reduce(f, xs[0])
      : [];
  }

  replicate(n, a) {
    let v = [a];
    let o = [];
    if (n < 1) return o;
    while (n > 1) {
      if (n & 1) o = o.concat(v);
      n >>= 1;
      v = v.concat(v);
    }
    return o.concat(v);
  }

  curry(f) {
    return a => b => f(a, b);
  }
}

function test(x) {
  return JSON.stringify(x);
}

const pwr = new PermutationsWithRepetition(2, [1, 2, 3]);

console.log(`TEST: ${test(pwr.init())}`); // --> [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]