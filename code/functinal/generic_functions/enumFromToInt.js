// enumFromToInt :: Int -> Int -> [Int]
const enumFromToInt = (m, n) =>
	n >= m ? (
		iterateUntil(x => x >= n, x => 1 + x, m)
	) : [];

// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = (p, f, x) => {
	let vs = [x],
		h = x;
	while (!p(h))(h = f(h), vs.push(h));
	return vs;
};