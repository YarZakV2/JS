// Завдання 1
let number = 1;
while(number < 11){
console.log(number);
number += 1;
}
// Завдання 2
for (let i = 2; i <= 20; i++){
  if (i % 2 !== 0) continue;
  console.log(i);
}
// Завдання 3
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
// Завдання 4
let n = 15; 

for (let i = 0; ; i++) {
  if (i >= n) break;
  console.log(i);
}
// Завдання 5
let i = 1;

while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}