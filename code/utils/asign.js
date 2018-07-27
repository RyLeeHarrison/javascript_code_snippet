const asign = (this && this.__assign) || Object.assign || function(t) {
  let i;
  let s;

  for (i in [...Array(arguments.length)]) {
    s = arguments[i];
    
    for (const p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) {
        t[p] = s[p];
        console.log(i, s, p, t)
      }
    }
  }

  return t;
}