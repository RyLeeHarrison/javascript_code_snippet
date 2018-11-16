const Session = (() => {
  const win = window.top || window;

  try {
    let store = (win.name ? JSON.parse(win.name) : {});

    function Save() {
      win.name = JSON.stringify(store);
    }

    if (window.addEventListener) {
      window.addEventListener('unload', Save, false);
    } else if (window.attachEvent) {
      window.attachEvent('onunload', Save);
    } else {
      window.onunload = Save;
    }

    return {
      set(name, value) {
        store[name] = value;
      },
      get(name) {
        return (store[name] ? store[name] : undefined);
      },
      clear() {
        store = {};
      },
      dump() {
        return JSON.stringify(store);
      }
    };
  } catch (e) {
    win.name = ''; /* reset cache */

    return {
      set() {},
      get() {},
      clear() {},
      dump() {}
    };
  }
})();

Session.set('user', {
  name: 'RyLee Harrison'
});

console.log( // ===> '{"user":{"name":"RyLee Harrison"}}'
    Session.dump()
);

console.log( // ===> '{name: "RyLee Harrison"}'
    Session.get('user')
);