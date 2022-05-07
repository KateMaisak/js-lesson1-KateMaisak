//1

alert("Привет, это работа Екатерины Майсак");

//2
let planet = 'Earth';
console.log(planet);

let age = '30';
console.log(age);

let brokenCar = 'Audi'
console.log(brokenCar);

let headerColor = 'Green';
console.log(headerColor);

let isAdmin = confirm("Вы администратор?");
console.log(isAdmin);

//3
let myName = 'Екатерина', mySurname = 'Майсак', myAge = '30';
console.log(`Привет, меня зовут ${myName} ${mySurname}, мне ${myAge} лет.`);

//4
let adminName = prompt("Кто проверяет мою работу?", "ИМЯ");
console.log(`Твою работу проверяет ${adminName}`);

//5

let str = "String";
console.log(typeof str);

let num = 2000;
console.log(typeof num);

let testSkiped = false;
console.log(typeof testSkiped);

let month = undefined;
console.log(typeof month);

let data = null;
console.log(typeof data);

//6

let newStr = "37";
newStr = Number(newStr);
console.log(typeof newStr);
newStr = Boolean(newStr);
console.log(typeof newStr);

let newValue = true;
newValue = String(newValue);
console.log(typeof newValue);
newValue = Number(newValue);
console.log(typeof newValue);

let newNum = 2007;
newNum = String(newNum);
console.log(typeof newNum);
newNum = Boolean(newNum);
console.log(typeof newNum);

//7
let name = "Ivan";
let surname = `${name}`;
console.log(surname);