// 버퍼 직접 다루기
import { Buffer } from 'buffer';

const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log(`buffer : ${buffer}`);
console.log(`buffer : ${buffer.toString()}`);

const arr = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')]
const buffer2 = Buffer.concat(arr);
console.log(`buffer2 : ${buffer2}`)

const buffer3 = Buffer.alloc(5);
console.log(buffer3);