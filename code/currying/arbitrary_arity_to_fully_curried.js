const extraCurry = (f, ...args) => {
    let intArgs = f.length;

    let _curry = (xs, arguments) => (
        (xs.length >= intArgs)
            ? (f(...xs))
            : (...args) => (_curry(xs.concat([].slice.apply(args)))))

    return _curry([].slice.call(args, 1));
};

let product3 = (a, b, c) => (a * b * c);

console.log( // ==> [ 14, 28, 42, 56, 70, 84, 98, 112, 126, 140 ]
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(extraCurry(product3)(7)(2))
)