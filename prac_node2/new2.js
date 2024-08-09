import fs from 'fs/promises';

const read = async () => {
    try {
        const data = await fs.readFile();
        console.log('파일 내용:', data);
    } catch (err) {
        console.error('파일 읽기 실패:', err);
    }
}

read();