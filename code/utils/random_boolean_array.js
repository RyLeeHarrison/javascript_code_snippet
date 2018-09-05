const crypto = require('crypto');

const randomBooleanArray = count => new Promise(res => {
  crypto.randomBytes(count, (err, buf) => res([...buf].map(v => v >= 127.5)));
});

// Promise
randomBooleanArray(10).then(boolArray => {
  console.log( // ==> [ false, false, true, false, false, true, true, true, true, false ]
      boolArray
  );
});

// Async
const run = async() => {
  const boolArray = await randomBooleanArray(10);
  console.log( // ==> [ false, false, true, false, false, true, true, true, true, false ]
      boolArray
  );
};

run();