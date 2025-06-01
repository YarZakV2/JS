const bankAccount = {
  ownerName: "Іван Іванов",
  accountNumber: "123456789",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    alert(`Рахунок поповнено. Залишок: ${this.balance} грн.`);
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      alert(`Гроші знято. Залишок: ${this.balance} грн.`);
    } else {
      alert("Недостатньо коштів на рахунку.");
    }
  },
};


if (confirm("Бажаєте поповнити рахунок?")) {
  const amount = Number(prompt("Введіть суму для поповнення:"));
  bankAccount.deposit(amount);
} else if (confirm("Бажаєте зняти гроші з рахунку?")) {
  const amount = Number(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(amount);
}


const weather = {
  temperature: null,
  humidity: 60,
  windSpeed: 10,

  isBelowZero() {
    return this.temperature < 0;
  },
};


weather.temperature = Number(prompt("Введіть температуру в °C:"));
if (weather.isBelowZero()) {
  alert("Температура нижче 0 градусів Цельсія.");
} else {
  alert("Температура 0 або вище градусів Цельсія.");
}


const user = {
  name: "Олена",
  email: "test@example.com",
  password: "123456",

  login() {
    const enteredEmail = prompt("Введіть email:");
    const enteredPassword = prompt("Введіть пароль:");
    if (enteredEmail === this.email && enteredPassword === this.password) {
      alert("Вхід успішний!");
    } else {
      alert("Невірний email або пароль.");
    }
  },
};


user.login();


const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  isHighRated() {
    return this.rating > 8;
  },
};


if (movie.isHighRated()) {
  console.log("Фільм має високий рейтинг.");
} else {
  console.log("Рейтинг фільму середній або низький.");
}


console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
