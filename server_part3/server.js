import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import qs from 'qs';

const format = { 'Content-Type': 'text/plain; charset=utf-8' };
const format2 = { 'Content-Type': 'text/html; charset=utf-8' };
const session = {};

const parseCookies = (cookie = '') => {
    return cookie.split(';')
            .map(v => v.split('='))
            .reduce((acc, [k, v]) => {
                acc[k.trim()] = decodeURIComponent(v);
                return acc;
            }, {});
}

const loginHandler = (req, res) => {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query, { ignoreQueryPrefix: true });
    const expires = new Date();

    expires.setMinutes(expires.getMinutes() + 5);
    const uniqueInt = Date.now();
    session[uniqueInt] = {
        name,
        expires,
    }
    res.writeHead(302, 
        {
            Location : '/',
            'Set-Cookie' : `session=${uniqueInt}; \
                            Expires=${expires.toGMTString()}; \
                            HttpOnly; Path=/`
        });
    res.end();
}


const requestHandler = async (req, res) => {
    const cookies = parseCookies(req.headers.cookie || '');

    if (req.url.startsWith('/login')) {
        loginHandler(req, res);
    }
    else if (cookies.session && session[cookies.session] && session[cookies.session].expires > new Date()) {
        res.writeHead(200, format);
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    }
    else {
        try {
            const data = await fs.readFile('./index.html');
            res.writeHead(200, format2);
            res.end(data);
        } catch (err) {
            res.writeHead(500, format);
            res.end(err.message);
        }
    }
}

const startServer = () => {
    http.createServer(requestHandler)
        .listen(8080, () => {
            console.log(`8080 포트에서 서버 대기중`);   
        })
}

startServer();