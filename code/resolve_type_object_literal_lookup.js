const myType = (value) => {
  const type = (Object.prototype.toString.call(value))
  
  const types = {
    '[object Undefined]': 'undefined',
    '[object String]':    'string',
    '[object Number]':    'number',
    '[object Boolean]':   'boolean',
    '[object Array]':     'array',
    '[object Map]':       'map',
    '[object Symbol]':    'symbol',
    '[object Set]':       'set',
    '[object Object]':    'object',
    '[object Function]':  'function',
    'default': type
  }
  return types[type] || types['default'];
}

let undef
let string = 'foo bar';
let number = 100;
let boolean = true;
let array = [];
let map = new Map()
let set = new Set()
let symbol = Symbol()
let object = {}
let func = () => 'function'

console.log(`undefined: ${myType(undef)}`)
console.log(`string: ${myType(string)}`)
console.log(`number: ${myType(number)}`)
console.log(`boolean: ${myType(boolean)}`)
console.log(`array: ${myType(array)}`)
console.log(`map: ${myType(map)}`)
console.log(`set: ${myType(set)}`)
console.log(`symbol: ${myType(symbol)}`)
console.log(`object: ${myType(object)}`)
console.log(`function: ${myType(func)}`)