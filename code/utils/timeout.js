const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const timeout = (promise, ms) => new Promise((resolve, reject) => {
  promise.then(resolve, reject);

  (async() => {
    await delay(ms);
    reject('Request timed out');
  })();
});

module.exports = timeout;