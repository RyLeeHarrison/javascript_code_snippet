const Tracker = (obj, options = {
  read: true,
  write: true,
  name: ''
}) => {
  options.name = options.name || 'T'

  const propKeySet = new Set(Reflect.ownKeys(obj));

  console.log(console.log(`TRACE KEYS(${options.name}):`, propKeySet))

  return new Proxy(obj, {
    get(target, propKey, receiver) {
      if (propKeySet.has(propKey)) {
        if (options.read) {
          console.log(`GET(${options.name}): ${propKey}`, target[propKey]);
          return Reflect.get(target, propKey, receiver);
        } else {
          console.log(`GET REJECTED(${options.name}) by: "${propKey}"`);
          return null;
        }
      }

      return Reflect.get(target, propKey, receiver);
    },
    set(target, propKey, value, receiver) {
      if (propKeySet.has(propKey)) {
        if (options.write) {
          console.log(`SET(${options.name}): ${propKey} = ${value}`);
          return Reflect.set(target, propKey, value, receiver);
        } else {
          console.log(`SET REJECTED(${options.name}) by: "${propKey}"`);
          return Reflect.get(target, propKey, receiver);
        }
      }

      return Reflect.get(target, propKey, receiver)
    },
    has(target, propKey) {
      console.log(`HAS(${options.name}): key ${propKey} in`, target)
      return propKeySet.has(target) ? true : false;
    },
  });
}


// const proxyObj = Tracker({hello: 'Untouched'}, {
//   read: true,
//   write: true
// }) // ===> TRACE KEYS(T): Set { 'hello' }

// proxyObj.hello             // GET(T): hello Untouched
// proxyObj.hello = 'Touched' // SET(T): hello = Touched

module.exports = Tracker