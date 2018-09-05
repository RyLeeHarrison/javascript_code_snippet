// npm install axios

const axios = require('axios');

const words = term => new Promise((res, rej) => {
  axios.get(`https://ac.duckduckgo.com/ac/?q=${term}&type=list`).then(({data}) => {
    const words = [];
    [...data[1].map(a => a.split(' '))].forEach(a => words.push(...a));
    res([...new Set(words)].sort(() => .5 - Math.random()).join(' '));
  }).catch(e => rej(e));
});


// Promise
words('hello').then(words => {
  console.log( // ==> dolly adele kitty hellofresh darkness neighbor old friend play my september free hello
      words
  );
});

// Async
const run = async() => {
  const words = await words('hello');
  console.log( // ==> dolly adele kitty hellofresh darkness neighbor old friend play my september free hello
      words
  );
};

run();