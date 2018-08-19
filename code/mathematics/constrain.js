const constrain  = (amt, low, high) => (
  (amt < low)
    ? low
    : (amt > high)
      ? high
      : amt
);


// Loop 10 times and constrain the index.
[...Array(10)].forEach((v, i) => { // ==> [5, 5, 5, 5, 5, 5, 6, 7, 7, 7]
  console.log(
      // can't be less than 5 and can't be higher than 7
      constrain(i, 5, 7)
  );
});