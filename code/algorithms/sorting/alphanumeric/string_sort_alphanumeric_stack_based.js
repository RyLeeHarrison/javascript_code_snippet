function sortAlpha(input) {
  const table = [...'abcdefghijklmnopqrstuvwxyz'];
  const stack = [...input];

  const res = [];

  while (stack.length) {
    const next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push((
        next === next.toUpperCase()
					&& next === next.toLowerCase())
					|| table.indexOf(next.toLowerCase()));
    }
  }

  return res.reverse().sort((a, b) => a > b).map(a => table[a]).join('');
}

console.log(
    sortAlpha('baf')
);