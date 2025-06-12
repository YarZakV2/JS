//1
const user = {
  name: 'John',
  age: 30,
  hobby: 'reading',
  premium: true,
};


user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

//2
function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps({ name: 'Mango', age: 2 }));

//3
function findBestEmployee(employees) {
  let best = '';
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      best = name;
    }
  }

  return best;
}

console.log(findBestEmployee({
  Ann: 29,
  David: 35,
  Helen: 1,
  Lorence: 99
})); 

//4
function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}


console.log(countTotalSalary({
  Mango: 100,
  Poly: 150,
  Alfred: 80
}));

//5
function getAllPropValues(arr, prop) {
  const values = [];
  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }
  return values;
}

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
];

console.log(getAllPropValues(products, 'name')); 

//6
function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}


const items = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
];

console.log(calculateTotalPrice(items, 'Radar')); 


