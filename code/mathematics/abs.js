const abs = x => (
  x = (x > 0)
    ? x
    : (- x)
);

console.log(
    abs(-100.321),     // ==> 100.321
    Math.abs(-100.321) // ==> 100.321
);