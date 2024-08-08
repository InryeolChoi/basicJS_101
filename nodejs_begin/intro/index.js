import checkOddEven from "./func.js";
import { odd, even } from "./oddEven.js";

const checkString = (str) => {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkOddEven(10));
console.log(checkString("hello"));