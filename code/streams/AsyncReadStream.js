const fs = require('fs')

const file = fs.createReadStream('FakeFile.js')

const chunkWrap = async (readable, cb) => {
  console.log(arguments)
  for await (const k of readable) {
    cb({ timestamp: +new Date(), chunk: k})
  }
}

chunkWrap(file, d => {
    console.log(d)
})

