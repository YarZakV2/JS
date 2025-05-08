//Завдання 1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const string = friends.join(', ')
// let string = '';
// for (let i = 0; i < friends.length; i++){
//   string += friends[i];
//   if (i < friends.length - 1){
//     string += ',';
//   }
// }
console.log(string);

// Завдання 2
const cards = [
  'Картока-1',
  'Картока-2',
  'Картока-3',
  'Картока-4',
  'Картока-5',
];

const cardToRemove = 'Картока-3';
const cardToInsert = 'Карточка 6';
const cardToUpdate = 'Карточка-4';

// Видалення 
const removeIndex = cards.indexOf(cardToRemove);
if (removeIndex !== -1) {
  cards.splice(removeIndex, 1);
}

// Додавання 
const insertIndex = 2;
cards.splice(insertIndex, 0, cardToInsert);

// Оновлення
const updateIndex = cards.indexOf('Картока-4');
if (updateIndex !== -1) {
  cards[updateIndex] = cardToUpdate;
}

console.log(cards);
