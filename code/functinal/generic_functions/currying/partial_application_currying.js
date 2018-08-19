const addN = n => {
  const curry = x => x + n;

  return curry;
};

const add2 = addN(5);

console.log( // =>[ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
    [...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => add2(v))]
);