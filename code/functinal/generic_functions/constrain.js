const constrain  = (amt, low, high) => (
  (amt < low)
    ? low
    : (amt > high)
      ? high
      : amt
);