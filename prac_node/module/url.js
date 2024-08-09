import { URL, format } from 'url';
import querystring from 'querystring'

// url 파싱 
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log(myURL);
console.log(format(myURL));

// searchParams
console.log("\n-------- searchParams --------")
console.log(myURL.searchParams.values());

// querystring
console.log("\n-------- querystring --------")
console.log(querystring.parse(myURL));