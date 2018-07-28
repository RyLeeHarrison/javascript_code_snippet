const curry = f => a => b => f(a, b);
const product = (a, b) => a * b;

const range = (m, n, step) => {
	let d = (step || 1) * (n >= m ? 1 : -1);

	return Array.from({
	    length: Math.floor((n - m) / d) + 1
	}, (_, i) => m + (i * d));
}


console.log(
    range(1, 10).map(curry(product)(7)), 					// ==> [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70 ]
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(curry(product)(7)), // ==> [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70 ]
)