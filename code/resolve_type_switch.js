const myType = (value) => {
  const type = Object.prototype.toString.call(value)
  
  switch (type) {
    case '[object Undefined]': return 'undefined'
    case '[object String]':    return 'string'
    case '[object Number]':    return 'number'
    case '[object Boolean]':   return 'boolean'
    case '[object Array]':     return 'array'
    case '[object Map]':       return 'map'
    case '[object Set]':       return 'set'
    case '[object Symbol]':    return 'symbol'
    case '[object Object]':    return 'object'
    case '[object Function]':  return 'function'
    default:                   return type
  }
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