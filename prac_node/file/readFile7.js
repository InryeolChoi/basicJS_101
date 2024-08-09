// 파일 여러개 읽기, 비동기 방식
// async, await 사용

import fs from 'fs/promises'

const readFiles = async () => {
    try {
        console.log('시작');

        const data1 = await fs.readFile('./readme.txt');
        console.log(`1번 ${data1.toString()}`);

        const data2 = await fs.readFile('./readme.txt');
        console.log(`2번 ${data1.toString()}`);

        const data3 = await fs.readFile('./readme.txt');
        console.log(`3번 ${data1.toString()}`);

        console.log('끝');
    } catch (err) {
        console.error(err);
    }
}

readFiles();