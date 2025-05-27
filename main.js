//1
const processArray = (array, callback) => callback(array);


const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);


const numbers = [3, 7, 2, 9, 5];

console.log(processArray(numbers, getSum)); // 26
console.log(processArray(numbers, getMin)); // 2
console.log(processArray(numbers, getMax)); // 9

//2
const operate = (a, b, callback) => callback(a, b);

console.log(operate(10, 5, (a, b) => a + b)); 
console.log(operate(10, 5, (a, b) => a - b)); 
console.log(operate(10, 5, (a, b) => a * b)); 
console.log(operate(10, 5, (a, b) => a / b)); 