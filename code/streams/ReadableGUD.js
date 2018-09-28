const { Readable } = require('stream');

class Counter extends Readable {
  constructor(opt) {
    super(opt);
    this._max = 1000000;
    this._index = 0;
  }
  _read() {
    const i = this._index++;
    if (i > this._max)
      this.push(null);
    else {
      const str = String(i);
      const buf = Buffer.from(str, 'ascii');
      this.push(buf);
    }
  }
  gud() {
  	return parseInt(this.read())
  }
}

const counter = new Counter();

for (let i = 0; i < 100; ++i) {
	console.log(counter.gud());
}