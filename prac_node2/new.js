import fs from 'fs';

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('파일 읽기 실패:', err);
        return;
    }
    console.log('파일 내용:', data);
});