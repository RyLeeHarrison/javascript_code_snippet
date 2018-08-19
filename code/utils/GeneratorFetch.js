const fetch = require('node-fetch');

class FetchGenerator {
  async getUrl(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

  * generatorMethod(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
      yield {
        key: propKey,
        value: this.getUrl(obj[propKey])
      };
    }
  }
}


const fetchgenerator = new FetchGenerator();

const methods = {
  user: 'https://api.github.com/users/ryleeharrison',
  remp: 'https://api.github.com/users/ryleeharrison/repo'
}

for (let { key, value } of fetchgenerator.generatorMethod(methods)) {
    console.log(value)
    value.then(a => {
      console.log(key, a) 
    });
}