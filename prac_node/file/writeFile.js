import fs from 'fs/promises';

fs.writeFile('./writeFile.txt', '글이 입력됩니다.')
    .then(() => {
        return fs.readFile('./writeFile.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });