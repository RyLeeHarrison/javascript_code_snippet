const getType = value => {
  const type = Object.prototype.toString.call(value);

  switch (type) {
    case '[object Undefined]': return 'undefined';
    case '[object String]':    return 'string';
    case '[object Number]':    return 'number';
    case '[object Boolean]':   return 'boolean';
    case '[object Array]':     return 'array';
    case '[object Map]':       return 'map';
    case '[object Set]':       return 'set';
    case '[object Symbol]':    return 'symbol';
    case '[object Object]':    return 'object';
    case '[object Function]':  return 'function';
    default:                   return type;
  }
};

console.log(`undefined: ${getType(undefined)}`);
console.log(`string: ${getType('foo bar')}`);
console.log(`number: ${getType(100)}`);
console.log(`boolean: ${getType(true)}`);
console.log(`array: ${getType([])}`);
console.log(`map: ${getType(new Map())}`);
console.log(`set: ${getType(new Set())}`);
console.log(`symbol: ${getType(Symbol())}`);
console.log(`object: ${getType({})}`);
console.log(`function: ${getType(() => 'function')}`);