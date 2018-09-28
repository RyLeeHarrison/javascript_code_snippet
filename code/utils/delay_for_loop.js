const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const delayFor = async (values, cb, ms = 0) => {
  for (const value of values) {
    cb(value)
    await delay(ms)
  }
};

delayFor([...'abcdefghijklmnopqrstuvwzyz'], (value) => {
  console.log(value)
}, 1000);
