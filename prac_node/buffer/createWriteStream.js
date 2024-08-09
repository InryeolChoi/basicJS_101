// 파일을 쓰는 스트림 메소드

import fs, { WriteStream } from 'fs'

const writeStream = fs.createWriteStream('./writeme.txt');
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료')
})

writeStream.write('이글을 씁니다.\n');
writeStream.write('한번 더 씁니다.\n');
writeStream.end();