// 파일 1개 읽기, 콜백함수

import fs from 'fs';

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
})