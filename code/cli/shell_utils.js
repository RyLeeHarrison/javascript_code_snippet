// demo: https://repl.it/@RyLeeHarrison1/shell-utils

const shell = {
  string({stdout, postfix = '', prefix = '', cb}) {
    let that = [];

    prefix = `${[...prefix].join('')}`;
    postfix = `${[...postfix].join('')}`;

    if (stdout instanceof Array) {
      for (const [...n] of [...stdout])
        that.push(`${prefix}${[...n].join('')}${postfix}`);
    }

    that = ((typeof stdout === 'string') ? stdout : that);

    if (cb) cb(that);
    else return that;
  },
  print(value) {
    for (const n of value) {
      console.log(((n instanceof Array)
        ? Shell.print([...n])
        : n
      ));
    }
  }
};

shell.string({
  stdout: [
    'hello',
    ['w', 'o', 'r', 'l', 'd'],
  ],
  prefix: ['[', ' - '],
  postfix: ' - ]',
  cb: stdout => {
    shell.print(stdout);
  }
});
