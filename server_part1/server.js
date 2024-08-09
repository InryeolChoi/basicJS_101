import http from 'http';
import fs from 'fs/promises';

const requestHandler = async (req, res) => {
    try {
        console.log('연결됨')
        const data = await fs.readFile("./index.html");
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(err.message);
    }
}

const startServer = () => {
    http.createServer(requestHandler)
        .listen(8080, () => {
            console.log('8080 포트에서 대기중')
        })
}

startServer();