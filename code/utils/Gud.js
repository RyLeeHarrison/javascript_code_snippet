class Gud {
  constructor(key = '__GUD__') {
    this.key = Symbol(key)
  }
  next() {
    return global[this.key] = (global[this.key] || 0) + 1;
  }
  key() {
    return this.key
  }
}

const gud = new Gud('__SOME_GUD__')

console.log(
  gud.next(), // ==> 1
  gud.next(), // ==> 2
  gud.next(), // ==> 3
  gud.next(), // ==> 4
  gud.next(), // ==> 5
  gud.next(), // ==> 6
  gud.next(), // ==> 7
  gud.next(), // ==> 8
  gud.next(), // ==> 9
  gud.next(), // ==> 10
  gud.next(), // ==> 11
  gud.next(), // ==> 12
  gud.next(), // ==> 13
  gud.next(), // ==> 14
  gud.next(), // ==> 15
);
