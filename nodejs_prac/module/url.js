import { URL, format} from 'url';

// url을 파싱할 때 쓰는 메소드 
const myURL = new URL('http://www.naver.com');
console.log(myURL);
console.log(format(myURL));