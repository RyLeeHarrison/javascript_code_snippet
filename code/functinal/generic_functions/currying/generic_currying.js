const curry = f => a => b => f(a, b);
const product = (a, b) => a * b;

console.log( // function ==> function ==> number
    typeof curry(product),
    typeof curry(product)(7),
    typeof curry(product)(7)(9),
);

console.log( // ==> [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(curry(product)(7))
);
