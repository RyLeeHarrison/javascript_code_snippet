// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = (f, startValue, xs) =>
  xs.reduce((a, x) => {
    const v = f(a.acc, x);
    return {
      acc: v,
      scan: a.scan.concat(v)
    };
  }, {
    acc: startValue,
    scan: [startValue]
  }).scan;