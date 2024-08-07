import crypto from 'crypto';

// 단방향 암호화

s1 = crypto.createHash('sha512').update('비밀번호').digest('base64');
s2 = crypto.createHash('sha512').update('비밀번호').digest('hex');
s3 = crypto.createHash('sha512').update('비밀번호').digest('base64'); 

console.log()