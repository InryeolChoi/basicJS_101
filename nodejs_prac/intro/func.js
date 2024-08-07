import { odd, even } from './oddEven.js';

const checkOddEven = (num) => {
  if (num % 2 === 0) {
    return even;
  }
  return odd;
}

console.log(checkOddEven(1));

export default checkOddEven;