const sortAlpha = word => {
  const table = [...'abcdefghijklmnopqrstuvwxyz'];

  const subst = [...word]
      .map((v, i) => [v, table.indexOf(v)])
      .sort((a, b) => a > b)
      .map((a, b) => table[b])
      .join('');

  return subst;
};

console.log(sortAlpha('adcb'));