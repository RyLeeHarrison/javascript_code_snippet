class Cookie {
  static set(key, value, days) {
    document.cookie = `${key}=${value}; expires=${(new Date(new Date().getTime() + ((days ? days : 14) * 86400000))).toUTCString()}; path=/`;
  }

  static get(key) {
    const r = (`; ${document.cookie};`).match(`${key}=(.*?);`);
    return r ? r[1] : null;
  }

  static unset(key) {
    document.cookie = `${key}=; expires=${(new Date(1)).toUTCString()}; path=/`;
  }
}

Cookie.set('a', 'b', 1);

console.log( // ===> "b"
    Cookie.get('a')
);
