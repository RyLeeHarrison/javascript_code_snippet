module.exports = class {
  static isObject(object) {
    return (typeof object === "object") && (object !== null)
  }

  static get(names, object) {
    return Object.keys(object)
    .filter((key) => names.includes(key))
    .reduce((newObject, currentKey) => ({
      ...newObject,
      [currentKey]: object[currentKey]
    }), {})
  }

  static getWithout(names, object) {
    return Object.keys(object)
      .filter((key) => !names.includes(key))
      .reduce((newObject, currentKey) => ({
        ...newObject,
        [currentKey]: object[currentKey]
      }), {})
  }

  static keys(obj) {
    return cb => isValid(obj, (obj) => {    
      const result = [];
      for (const prop in obj) (
        Object.prototype.hasOwnProperty.call(obj, prop)
      ) && (result.push(prop))
      cb(result);
    })
  }
  
  static values(obj) {
    return cb => isValid(obj, (object) => {    
      const result = [];
      for (const prop in object) (
        object.hasOwnProperty(prop)
      ) && result.push(object[prop])
      cb(result);
    })
  }

  static renameKey(oldKey, newKey, { [oldKey]: old, ...others }) {
    return ({
      [newKey]: old,
      ...others
    });
  }

  static convertToSymbol([currentKey, obj], symbolKay) {
    return (obj[Symbol(symbolKay || currentKey )] = obj[currentKey]) && (
      delete obj[currentKey]
    )
  }

  static removeDupkeys([...obj]) {
    return [...new Set[obj]]
  }

  static shallowEquals(a, b) {
    for (const i in a) {
      if (b[i] !== a[i]) return false
    }

    for (const i in b) {
      if (b[i] !== a[i]) return false
    }

    return true
  }

}



const exampleObject = {
  A: 'B',
  C: 'D'
}

values(exampleObject)(values => {
  console.log(values)
})

keys(exampleObject)(keys => {
  console.log(keys)
})