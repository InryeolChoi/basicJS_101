// 파일 여러개 읽기, 동기 방식

import fs from 'fs';

console.log('시작');

let data = fs.readFileSync('./readme.txt');
console.log(`1번 ${data.toString()}`);

data = fs.readFileSync('./readme.txt');
console.log(`2번 ${data.toString()}`);

data = fs.readFileSync('./readme.txt');
console.log(`3번 ${data.toString()}`);

console.log('끝');
