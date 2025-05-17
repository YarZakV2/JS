//1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(['Mango', 'Poly', 'Ajax']);

//2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is cool', 10));

//3
function findLongestWord(string) {
  const words = string.split(' ');
  let longest = words[0];
  
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

//4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + '...';
  }
}
console.log(formatString('Цей текст точно коротший за 40 символів'));
console.log(formatString('Цей рядок точно довший за сорок символів, і буде обрізаний...'));

//5
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes('spam') || lowerMessage.includes('sale');
}
console.log(checkForSpam('Get best SALE now!'));
console.log(checkForSpam('Just a normal message'));

//6
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введи число');
  if (input === null) break;

  const number = Number(input);

  if (isNaN(number)) {
    alert('Було введено не число, попробуйте ще раз');
    continue;
  }

  numbers.push(number);
} while (true);

for (const num of numbers) {
  total += num;
}

console.log(`Загальна сума чисел дорівнює ${total}`);

//7
const logins = ['user123', 'admin', 'guest'];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}

console.log(addLogin(logins, 'newUser')); 
console.log(addLogin(logins, 'us'));     
console.log(addLogin(logins, 'admin'));  
