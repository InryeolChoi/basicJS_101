import crypto from 'crypto';
import readline from 'readline';

// 단방향 암호화 & 양방향 암호화
// 동적배열 + foreach문 써보기
// 입력받는 함수도 써보기
let arr = []

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

let inputCount = 0;

console.log('문자열을 입력하세요 :');

rl.on('line', (input) => {
    if (inputCount === 0)
    {
        // 해시를 생성하여 배열에 추가
        arr.push(crypto.createHash('sha512').update(input).digest('base64'));
        arr.push(crypto.createHash('sha512').update(input).digest('hex'));
        arr.push(crypto.createHash('sha512').update(input).digest('base64'));

        // 배열의 요소 출력
        arr.forEach((element, index) => {
            console.log(`${index}번째 element : ${element}`);
        });
        inputCount++;
        console.log('\n문자열을 입력하세요 :')
    } 
    else if (inputCount === 1) // 암호화된 비밀번호 생성
    {
        crypto.randomBytes(64, (err, buf) => {
            if (err) throw err;
            const salt = buf.toString('base64');
            crypto.pbkdf2(input, salt, 100000, 64, 'sha512', (err, key) => {
                if (err) throw err;
                console.log(`암호화된 비번: ${key.toString('base64')}`);
            });
        });
        inputCount++;
        console.log('\n문자열을 입력하세요 :');
    }
    else if (inputCount === 2) // 양방향 암호화
    {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let result = cipher.update(input, 'utf8', 'base64');
        result += cipher.final('base64');
        console.log(`암호화 : ${result}`);

        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let result2 = decipher.update(result, 'base64', 'utf8');
        result2 += decipher.final('utf8');
        console.log(`복호화 : ${result2}`);
        rl.close();
    }
});