"use strict";
// LESSON1
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
let number5 = 3.14;
let number6 = 2.7;
let number7 = 16;
let booleanTrue = true;
let booleanFalse = false;
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
console.log(number7);
console.log(booleanTrue);
console.log(booleanFalse);
// --------------------------------============
let firstName = 'Синегуб';
let middleName = 'Данил';
let lastName = 'Олегович';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
let aForLesson1 = 100;
let bForLesson1 = '100';
let cForLesson1 = true;
console.log(typeof aForLesson1);
console.log(typeof bForLesson1);
console.log(typeof cForLesson1);
let arr = [12, 34, 'arrays', false, true, ' ', 12, null, true, 'sar'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
let book1 = {
    title: 'Robin',
    pageCount: 1,
    genre: 'roman'
};
let book2 = {
    title: 'Island',
    pageCount: 4,
    genre: 'interes'
};
let book3 = {
    title: 'All and all',
    pageCount: 9,
    genre: 'text'
};
let book4 = {
    title: 'Robin',
    pageCount: 1,
    genre: 'roman',
    authors: [{ name: 'Danya', age: 18 }]
};
let book5 = {
    title: 'Robin',
    pageCount: 100,
    genre: 'Text',
    authors: [{ name: 'Petya', age: 99 }]
};
let book6 = {
    title: 'Jordan',
    pageCount: 164,
    genre: 'roman',
    authors: [{ name: 'Mark', age: 38 }]
};
let user = [
    { name: 'danya', username: 'dandandan', password: '1234' },
    { name: 'danya', username: 'lkoun', password: '346735' },
    { name: 'danya', username: 'dandandan', password: '457325' },
    { name: 'danya', username: 'dandandan', password: '4363' },
    { name: 'danya', username: 'dandandan', password: 'sdsg' },
    { name: 'vasya', username: 'dandandan', password: '1577' },
    { name: 'danya', username: 'dandandan', password: 'sdggg' },
    { name: 'danya', username: 'dandandan', password: '6435' },
    { name: 'danya', username: 'dandandan', password: 'sdhd' },
    { name: 'danya', username: 'keke', password: '32546' }
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
let day1 = { morningTemp: 4, afternoonTemp: 10, eveningTemp: 2 };
let day2 = { morningTemp: 4, afternoonTemp: 10, eveningTemp: 2 };
let day3 = { morningTemp: 4, afternoonTemp: 10, eveningTemp: 2 };
let day4 = { morningTemp: 4, afternoonTemp: 10, eveningTemp: 2 };
let day5 = { morningTemp: 4, afternoonTemp: 10, eveningTemp: 2 };
let day6 = { morningTemp: 4, afternoonTemp: 10, eveningTemp: 2 };
let day7 = { morningTemp: 4, afternoonTemp: 10, eveningTemp: 2 };
let arrForLesson2 = [day1, day2, day3, day4, day5, day6, day7];
// ------------------------------
let promptX = prompt('choose and write 1, 0 or -3');
let x;
if (promptX !== null) {
    x = +promptX;
}
else {
    x = null;
}
if (x !== 0) {
    console.log('true');
}
else {
    console.log('false');
}
// ----------------------------
let time = 53;
if (time >= 0 && time < 15) {
    console.log('1');
}
else if (time >= 15 && time < 30) {
    console.log('2');
}
else if (time >= 30 && time < 45) {
    console.log('3');
}
else if (time >= 45 && time < 60) {
    console.log('4');
}
//==============================
let day = 23;
if (day > 0 && day <= 10) {
    console.log('1');
}
else if (day > 10 && day <= 20) {
    console.log('2');
}
else if (day > 20 && day <= 30) {
    console.log('3');
}
//==================================
let dayForLesson2 = prompt('Введите день (Sunday, Monaday...)');
if (dayForLesson2 !== null) {
    switch (dayForLesson2) {
        case 'Sunday':
            console.log('Thing');
            break;
        case 'Monday':
            console.log('Thing');
            break;
        case 'Tuesday':
            console.log('Thing');
            break;
        case 'Wednesday':
            console.log('Thing');
            break;
        case 'Thursday':
            console.log('Thing');
            break;
        case 'Friday':
            console.log('Thing');
            break;
        case 'Saturday':
            console.log('Thing');
            break;
        default:
            console.log('Enter');
    }
}
//============================
let promptALesson2 = prompt('Write first number');
let aForLesson2;
if (promptALesson2 !== null) {
    aForLesson2 = +promptALesson2;
}
else {
    aForLesson2 = null;
}
let promptBLesson2 = prompt('Write first number');
let bForLesson2;
if (promptBLesson2 !== null) {
    bForLesson2 = +promptBLesson2;
}
else {
    bForLesson2 = null;
}
if (aForLesson2 !== null && bForLesson2 !== null) {
    if (aForLesson2 > bForLesson2) {
        console.log('"А" больше');
    }
    else if (bForLesson2 > aForLesson2) {
        console.log('"B" больше');
    }
    else if (aForLesson2 === bForLesson2) {
        console.log('Они равны');
    }
}
else {
    console.log('Введите числа');
}
//---------------------------------===========
let xPromptLesson2 = prompt('Введите число или строку:');
let xForLesson2;
if (!xForLesson2) {
    xForLesson2 = 'default';
}
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}
//==========================
// LESSON3
for (let i = 0; i < 10; i++) {
    document.write(`
       <div>TASK1</div>
   `);
}
//=====================
for (let a = 0; a < 10; a++) {
    document.write(`
       <div>TASK(2) ${a}</div>
   `);
}
//=================
let d = 0;
while (d < 20) {
    document.write(`
       <h1>TASK3</h1>
   `);
    d++;
}
//======================================
let b = 0;
while (b < 20) {
    document.write(`
       <h1>TASK(4) ${b}</h1>
   `);
    b++;
}
//=================================
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let item of listOfItems) {
    document.write(`
       <li>${item}</li>
  `);
}
document.write(`</ul>`);
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let product of products) {
    document.write(`
       <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="" class="product-image">
       </div>
   `);
}
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
for (let user of users) {
    if (user.status) {
        console.log(user);
    }
}
console.log('');
for (let user of users) {
    if (!user.status) {
        console.log(user);
    }
}
console.log('');
for (let user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}
//==================================================================
// LESSON4
function square(a, b) {
    let result = a * b;
    console.log(result);
    return result;
}
square(5, 7);
//================================
function squareCircle(r) {
    let resultSquare = Math.PI * r * r;
    console.log(resultSquare);
    return resultSquare;
}
squareCircle(5);
function squareCylinder(h, radius) {
    return 2 * Math.PI * radius * (radius + h);
}
console.log(squareCylinder(6, 2));
//===================================
function someArray(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}
someArray([15, false, 'name']);
//======================================
function someText(text) {
    document.write(`<p>${text}</p>`);
}
someText('fsgdfgdfg');
//==========================================
function foobar(textForLi) {
    document.write(`<ul>    
       <li>${textForLi}</li>
       <li>${textForLi}</li>
       <li>${textForLi}</li>   
    </ul>`);
}
foobar('Some Text');
//==============================================
function foobar2(text, quantity) {
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
foobar2('fsdgsgd', 5);
//========================================
function someArray2(arr) {
    document.write(`<ul>`);
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
someArray2([234, '1gdfgdfg', 235, false, 23, true]);
function foobar4(obj) {
    for (let objItem of obj) {
        document.write(`<div>id: ${objItem.id}; name: ${objItem.name}; age: ${objItem.age}</div>`);
    }
}
foobar4([
    { id: 5, name: 'alex', age: 52353 },
    { id: 53, name: 'Danya', age: 51233 },
    { id: 4, name: 'alex', age: 533 },
    { id: 55, name: 'oleg', age: 534 },
]);
//=====================================
function foobar5(numbers) {
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (minNumber > numbers[i]) {
            minNumber = numbers[i];
        }
    }
    return minNumber;
}
console.log(foobar5([4, 235, -345, -235, 256, 235, -6346]));
//==============================
function sum(arr) {
    let result = 0;
    for (const arrItem of arr) {
        result += arrItem; // iter 1 = 1, iter 2 = 1 + 2
    }
    return result;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7]));
//======================================
function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length) {
        let value = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = value;
        return arr;
    }
    return '----';
}
console.log(swap([11, 22, 33, 44], 0, 2));
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chooseValue;
    for (let itemExchange of currencyValues) {
        if (itemExchange.currency === exchangeCurrency) {
            chooseValue = itemExchange;
            return sumUAH / chooseValue.value;
        }
    }
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'EUR'));
//========================================
// LESSON5
//Там тоже самое, что и lesson4
// LESSON6
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
let strings = [string1, string2, string3];
for (const string of strings) {
    console.log(string.length);
}
//==================================================
for (const string of strings) {
    console.log(string.toUpperCase());
}
//=============================
let s1 = 'HELLO WORLD';
let s2 = 'LOREM IPSUM';
let s3 = 'JAVASCRIPT IS COOL';
let sArr = [s1, s2, s3];
for (const s of sArr) {
    console.log(s.toLowerCase());
}
//==========================
let str = ' dirty string   ';
console.log(str.trim());
//================================
function stringToArray(str1) {
    if (str1.trim()) {
        let split = str1.split(' ');
        return split;
    }
    else {
        return 'Error';
    }
}
console.log(stringToArray('Ревуть воли як ясла повні'));
//======================================================
let arrForLesson6 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mappedArrForLesson6 = arrForLesson6.map(value => {
    return value.toString();
});
console.log(mappedArrForLesson6);
//==========================================
function sortNums(array, direction) {
    if (direction === 'ascending') {
        return nums.sort((num1, num2) => num1 - num2);
    }
    if (direction === 'descending') {
        return nums.sort((num1, num2) => num2 - num1);
    }
}
let nums = [11, 21, 3, 12, 35, 23, 33];
console.log(sortNums(nums, 'descending'));
//=======================================
let coursesAndDurationArray6 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let mappedArray6 = coursesAndDurationArray6.sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    };
});
console.log(mappedArray6);
let arrCard = [];
let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
for (const suit of suits) {
    for (const value of values) {
        let card = { cardSuit: suit, cardValue: value, color: '' };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        arrCard.push(card);
    }
}
console.log(arrCard);
console.log(arrCard.find(card => card.cardValue === 'ace' && card.cardSuit === 'spade'));
console.log(arrCard.filter(card => card.cardValue === '6'));
console.log(arrCard.filter(card => card.color === 'red'));
console.log(arrCard.filter(card => card.cardSuit === 'diamond'));
console.log(arrCard.filter(card => card.cardSuit === 'clubs' && card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8' && card.cardValue !== '9'));
let reduce = arrCard.reduce((accum, card) => {
    if (card.cardSuit === 'spade') {
        accum.spades.push(card);
    }
    else if (card.cardSuit === 'diamond') {
        accum.diamonds.push(card);
    }
    else if (card.cardSuit === 'heart') {
        accum.hearts.push(card);
    }
    else if (card.cardSuit === 'clubs') {
        accum.clubs.push(card);
    }
    return accum;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(reduce);
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter((value) => {
    return value.modules.includes('sass');
}));
console.log(coursesArray.filter((value) => {
    return value.modules.includes('docker');
}));
