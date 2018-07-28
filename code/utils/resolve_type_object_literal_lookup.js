const getType = (value) => {
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

console.log(`undefined: ${getType(undefined)}`)
console.log(`string: ${getType('foo bar')}`)
console.log(`number: ${getType(100)}`)
console.log(`boolean: ${getType(true)}`)
console.log(`array: ${getType([])}`)
console.log(`map: ${getType(new Map())}`)
console.log(`set: ${getType(new Set())}`)
console.log(`symbol: ${getType(Symbol())}`)
console.log(`object: ${getType({})}`)
console.log(`function: ${getType(() => 'function')}`)