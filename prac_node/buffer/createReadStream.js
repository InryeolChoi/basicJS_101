// 파일을 읽는 스트림 메소드

import fs from 'fs'

const readStream = fs.createReadStream('./readme.txt', { highWaterMark : 16 })
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log(`data : `, chunk, chunk.length)
})

readStream.on('end', () => {
    console.log(`end : ${Buffer.concat(data).toString()}`)
})

readStream.on(`error`, (err) => {
    console.log(`error : ${err}`)
})
