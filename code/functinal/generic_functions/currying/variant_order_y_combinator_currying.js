// This is a variant of the Applicative order Y combinator
const fix 		= f => (f => f(f))(g => f((...a) => g(g)(...a)));
const curry     = f => (fix(z => (n,...a) => (n > 0 ? b => z(n - 1,...a,b) : f(...a)))(f.length));
const curryrest = f => (fix(z => (n,...a) => (n > 0 ? b => z(n - 1,...a,b) : (...b) => f(...a,...b)))(f.length));

const curriedmax = curry(Math.max);
const curryrestedmax = curryrest(Math.max);

console.log(
    curriedmax(8)(4),
    curryrestedmax(8)(4)(),
    curryrestedmax(8)(4)(9,7,2));
