import os from 'os';

const str = `운영체제 정보-----
아키텍쳐 : ${os.arch()}
플랫폼 : ${os.platform()}
운영체제 : ${os.type()}
부팅 이후 : ${os.uptime()}초가 흘렸습니다.
이름 : ${os.hostname()}
버전 : ${os.release()}

--------------------
홈 디렉터리 경로 : ${os.homedir()}
임시 파일 저장경로 : ${os.tmpdir()}
컴퓨터의 코어 : ${os.cpus()}
컴퓨터의 코어 갯수 : ${os.cpus().length}
사용가능한 메모리 : ${os.freemem()}
전체 메모리 용량 : ${os.totalmem()}
`

console.log(str);