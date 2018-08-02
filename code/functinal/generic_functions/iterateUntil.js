// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = (p, f, x) => {
	let vs = [x],
		h = x;
	while (!p(h))(h = f(h), vs.push(h));
	return vs;
};