// 파일 여러개 읽기, 비동기 방식
// 순서를 보장할 수 없음

import fs from 'fs';

console.log('시작');
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(`1번 ${data.toString()}`);
})
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(`2번 ${data.toString()}`);
})
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(`3번 ${data.toString()}`);
})
console.log('끝');