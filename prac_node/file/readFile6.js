// 파일 여러개 읽기, 비동기 방식
// promises

import fs from 'fs/promises'

console.log('시작');
fs.readFile('./readme.txt')
    .then((data) => {
        console.log(`1번 ${data.toString()}`)
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log(`2번 ${data.toString()}`)
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log(`3번 ${data.toString()}`)
        console.log('끝')
    })
    .catch((err) => {
        console.error(err);  
    })