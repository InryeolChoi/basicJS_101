import http from 'http';
import fs from 'fs/promises';

const format = { 'Content-type': 'text/html; charset=utf-8' };
const format2 = { 'Content-type': 'text/plain; charset=utf-8' };


const handleGetRequest = async (req, res) => {
    if (req.url === '/') {
        const data = await fs.readFile('./restFront.html');
        res.writeHead(200, format);
        return res.end(data);
    }
    else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, format);
        return res.end(data);
    }
    else if (req.url === '/users') {
        res.writeHead(200, format2);
        return res.end(JSON.stringify(users));
    }
    else if (req.url === '/favicon.ico' || req.url === '/apple-touch-icon-precomposed.png') {
        res.writeHead(204);
        return res.end();
    }
    try {
        const data = await fs.readFile(`.${req.url}`);
        res.end(data);
    } catch (err) {
        console.error(err);
    }
}

const handlePostRequest = async (req, res) => {
    if (req.url === '/') {
        let body = '';
        req.on('data', (data) => {
            body += data;
        })
        return req.on('end', () => {
            console.log(`POST 본문(body) : ${body}`);
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            res.writeHead(201);
            res.end('등록 성공')
        })
    }
}

const handlePutRequest = async (req, res) => {
    if (req.url.startsWith('/user/')) {
        const key = req.url.split('/');
        let body = '';
        req.on('data', (data) => {
            body += data;
        })
        return req.on('end', () => {
            console.log(`POST 본문(body) : ${body}`);
            users[key] = JSON.parse(body).name;
            return res.end(JSON.stringify(users));
        })
    }
}

const handleDeleteRequest = async (req, res) => {
    if (req.url.startsWith('/user/')) {
        const key = req.url.split('/');
        delete users[key];
        return res.end(JSON.stringify(users));
    }
    res.writeHead(404);
    return res.end('Not found');
}


const requestHandler = async (req, res) => {
    try {
        if (req.method == 'GET') {
            await handleGetRequest(req, res);
        }
        else if (req.method == 'POST') {
            await handlePostRequest(req, res);
        }
        else if (req.method == 'PUT') {
            await handlePutRequest(req, res);
        }
        else if (req.method == 'DELETE') {
            await handleDeleteRequest(req, res);
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500);
        res.end(err);
    }
}

const startServer = () => {
    http.createServer(requestHandler)
        .listen(8080, () => {
            console.log('8080 포트에서 대기중')
        })
}

startServer();