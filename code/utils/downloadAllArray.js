const fs = require('fs');
const path = require('path');
const url = require('url');
const request = require('request');

const downloadAll = async (obj, folder = 'images') => {
  for await (const img of obj) {
    const newUrl = url.parse(img)
    const ext = path.extname(newUrl.path)
    const basename = path.basename(newUrl.path, ext)

    await new Promise((resolve, rej) => {
      request.head(img, (err, res, body) => {
        request(img).pipe(
          fs.createWriteStream(`${folder}/${basename}${ext.toLowerCase()}`)
        )
        .on('close', resolve)
        .on('error', rej)
      });
    }); 
  }
}

downloadAll([
  'https://www.w3schools.com/html/pic_trulli.jpg',
  'https://www.w3schools.com/html/img_girl.jpg',
  'https://www.w3schools.com/html/img_chania.jpg',
], 'images');