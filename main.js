// 1. 
let field1 = "Привіт";
let field2 = "Світ";

if (field1 !== "" && field2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2. 
let num1 = 7;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

// 3.
let text = "Я вивчаю JavaScript";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// 4. 
let number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

// 5. 
let Name = "Ivan";
let email = "ivan@example.com";
let password = "123456";

if (
  Name.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  email.indexOf("@") < email.lastIndexOf(".") &&
  password.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
