// Завдання 1
const a = [1, 2, 3];
a[1] = 10;
console.log(a);

//Завдання 2
const string = ["вввв", "ііііі", "ssssss"];
string.push("яяяяяя");
console.log(string);

//Завдання 3
const num = [18, 155, 30, 48];
let sum = 0;

for (let i = 0; i < num.length; i++) {
sum += num[i];
}
console.log(sum);

//Завдання 4
const number = [18, 155, 30, 48, 11];
for (let i = 0; i < number.length; i++){
  console.log (number[i]);
}
//Завдання 5
const str = ["ssssss", "ss", "aaaaaaaaaaaa", "bbbb", "cccccccc"];
for (let i = 0; i < str.length; i++){
  if (str[i].length > 5) {
    console.log(str[i]);
  }
}

// Завдання 6
const numbers = [18, 155, 30, 48, 11, 15, 100, 78, 254, 32];
console.log(Math.max(...numbers));

// Завдання 7
const numberss = [3, 12, 7, 8, 5, 10, 2, 19, 6, 4];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
