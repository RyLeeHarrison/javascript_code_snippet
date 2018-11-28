const accessTrigger = (obj) => {
  const propKeySet = new Set(Reflect.ownKeys(obj));

  return new Proxy(obj, {
    get(target, propKey, receiver) {
      if (propKeySet.has(propKey)) {
          console.log(`GET ${propKey}`);
      }
      return Reflect.get(target, propKey, receiver);
    },
    set(target, propKey, value, receiver) {
      if (propKeySet.has(propKey)) {
          console.log(`SET ${propKey} = ${value}`);
      }
      return Reflect.set(target, propKey, value, receiver);
    },
  });
}



const a = AccessTrigger({
  name: 'rylee'
})

console.log( // GET name
  a.name     // rylee
)

a.name = 'RyLee' // SET name = RyLee