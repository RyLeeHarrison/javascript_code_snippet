const fs = require('fs');

const fileExists = (filePath) => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}