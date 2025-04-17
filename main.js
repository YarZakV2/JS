// Завдання 1
const drink = 'Чай';
switch (drink) {
  case 'Кава':
    console.log('Кава');
    break;
  case 'Чай':
    console.log('Чай');
    break;
  case 'Сік':
    console.log('Сік');
    break;
  default:
    console.log('Невідомий напій');
}

// Завдання 2
const day = 'субота';
if (['понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця'].includes(day)) {
  console.log('Робочий день');
} else if (['субота', 'неділя'].includes(day)) {
  console.log('Вихідний');
} else {
  console.log('Невірний день');
}

// Завдання 3
const month = 3;
let season;
switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'Зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'Весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'Літо';
    break;
  case 9:
  case 10:
  case 11:
    season = 'Осінь';
    break;
  default:
    season = 'Невірний номер місяця';
}
console.log(season);

// Завдання 4
const color = 'жовтий';
switch (color) {
  case 'червоний':
    console.log('стоп');
    break;
  case 'жовтий':
    console.log('чекати');
    break;
  case 'зелений':
    console.log('йти');
    break;
  default:
    console.log('невідомий колір');
}

// Завдання 5
const num1 = 10;
const num2 = 0;
const operator = '/';
let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num2 !== 0 ? num1 / num2 : 'Помилка: ділення на нуль';
    break;
  default:
    result = 'Невідома операція';
}
console.log(result);
