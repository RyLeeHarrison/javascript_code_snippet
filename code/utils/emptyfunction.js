function makeEmptyFunction(arg) {
  return () => arg;
}

const emptyFunction = {
  thatReturnsThis: this,
  thatReturns: makeEmptyFunction,
  thatReturnsFalse: makeEmptyFunction(false),
  thatReturnsTrue: makeEmptyFunction(true),
  thatReturnsNull: makeEmptyFunction(null),
  thatReturnsArgument: arg => arg,
}

// export default
module.exports =emptyFunction;