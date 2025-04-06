            // LESSON1
let hello: string = 'hello';
let owu: string = 'owu';
let com: string = 'com';
let ua: string = 'ua';
let number1: number = 1;
let number2: number = 10;
let number3: number = -999;
let number4: number = 123;
let number5: number = 3.14;
let number6: number = 2.7;
let number7: number = 16;
let booleanTrue: boolean = true;
let booleanFalse: boolean = false;
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

let firstName: string = 'Синегуб';
let middleName: string = 'Данил';
let lastName: string = 'Олегович';
let person: string = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

let aForLesson1: number = 100;
let bForLesson1: string = '100';
let cForLesson1: boolean = true;
console.log(typeof aForLesson1);
console.log(typeof bForLesson1);
console.log(typeof cForLesson1);

        // LESSON2

type AuthorsForBookType = {
    name: string,
    age: number,
};
type AuthorsForBookArrayType = AuthorsForBookType[];

type BookType = {
    title: string,
    pageCount: number,
    genre: string,
    authors?: AuthorsForBookArrayType,
};

type AllowedTypes = number | string | null | boolean;

let arr: AllowedTypes[] = [12, 34, 'arrays', false, true, ' ', 12, null, true, 'sar'];

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


let book1: BookType = {
    title: 'Robin',
    pageCount: 1,
    genre: 'roman'
};
let book2: BookType = {
    title: 'Island',
    pageCount: 4,
    genre: 'interes'
};
let book3: BookType = {
    title: 'All and all',
    pageCount: 9,
    genre: 'text'
};
let book4: BookType = {
    title: 'Robin',
    pageCount: 1,
    genre: 'roman',
    authors: [{name: 'Danya', age: 18}]
};
let book5: BookType = {
    title: 'Robin',
    pageCount: 100,
    genre: 'Text',
    authors: [{name: 'Petya', age: 99}]
};
let book6: BookType = {
    title: 'Jordan',
    pageCount: 164,
    genre: 'roman',
    authors: [{name: 'Mark', age: 38}]
};

//=====================================================

type UserForLesson2Type = {
    name: string,
    username: string,
    password: string,
}

let user: UserForLesson2Type[] = [
    {name: 'danya', username: 'dandandan', password: '1234'},
    {name: 'danya', username: 'lkoun', password: '346735'},
    {name: 'danya', username: 'dandandan', password: '457325'},
    {name: 'danya', username: 'dandandan', password: '4363'},
    {name: 'danya', username: 'dandandan', password: 'sdsg'},
    {name: 'vasya', username: 'dandandan', password: '1577'},
    {name: 'danya', username: 'dandandan', password: 'sdggg'},
    {name: 'danya', username: 'dandandan', password: '6435'},
    {name: 'danya', username: 'dandandan', password: 'sdhd'},
    {name: 'danya', username: 'keke', password: '32546'}
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

// ==============================================

type DayForLesson2Type = {
    morningTemp: number,
    afternoonTemp: number,
    eveningTemp: number,
}

let day1: DayForLesson2Type = {morningTemp: 4, afternoonTemp: 10, eveningTemp: 2};
let day2: DayForLesson2Type = {morningTemp: 4, afternoonTemp: 10, eveningTemp: 2};
let day3: DayForLesson2Type = {morningTemp: 4, afternoonTemp: 10, eveningTemp: 2};
let day4: DayForLesson2Type = {morningTemp: 4, afternoonTemp: 10, eveningTemp: 2};
let day5: DayForLesson2Type = {morningTemp: 4, afternoonTemp: 10, eveningTemp: 2};
let day6: DayForLesson2Type = {morningTemp: 4, afternoonTemp: 10, eveningTemp: 2};
let day7: DayForLesson2Type = {morningTemp: 4, afternoonTemp: 10, eveningTemp: 2};
let arrForLesson2: DayForLesson2Type[] = [day1, day2, day3, day4, day5, day6, day7];

// ------------------------------

let promptX: string | null = prompt('choose and write 1, 0 or -3');
let x: number | null;

if (promptX !== null) {
    x = +promptX;
} else {
    x = null
}

if (x !== 0) {
    console.log('true')
} else {
    console.log('false')
}

// ----------------------------

let time: number = 53;
if (time >= 0 && time < 15) {
    console.log('1')
} else if (time >= 15 && time < 30) {
    console.log('2')
} else if (time >= 30 && time < 45) {
    console.log('3')
} else if (time >= 45 && time < 60) {
    console.log('4')
}

//==============================

let day: number = 23;
if (day > 0 && day <= 10) {
    console.log('1')
} else if (day > 10 && day <= 20) {
    console.log('2')
} else if (day > 20 && day <= 30) {
    console.log('3')
}

//==================================

let dayForLesson2: string | null = prompt('Введите день (Sunday, Monaday...)');
if (dayForLesson2 !== null) {
    switch (dayForLesson2) {
        case 'Sunday':
            console.log('Thing');
            break

        case 'Monday':
            console.log('Thing');
            break

        case 'Tuesday':
            console.log('Thing');
            break

        case 'Wednesday':
            console.log('Thing');
            break

        case 'Thursday':
            console.log('Thing');
            break

        case 'Friday':
            console.log('Thing');
            break

        case 'Saturday':
            console.log('Thing');
            break

        default:
            console.log('Enter')
    }
}

//============================

let promptALesson2: string | null = prompt('Write first number');
let aForLesson2: number | null;
if (promptALesson2 !== null) {
    aForLesson2 = +promptALesson2;
} else {
    aForLesson2 = null
}

let promptBLesson2: string | null = prompt('Write first number');
let bForLesson2: number | null;
if (promptBLesson2 !== null) {
    bForLesson2 = +promptBLesson2;
} else {
    bForLesson2 = null
}

if (aForLesson2 !== null && bForLesson2 !== null) {
    if (aForLesson2 > bForLesson2) {
        console.log('"А" больше')
    } else if (bForLesson2 > aForLesson2) {
        console.log('"B" больше')
    } else if (aForLesson2 === bForLesson2) {
        console.log('Они равны')
    }
} else {
    console.log('Введите числа')
}

//---------------------------------===========

let xPromptLesson2: string | null = prompt('Введите число или строку:');
let xForLesson2: string | number | null | boolean | undefined;

if (!xForLesson2) {
    xForLesson2 = 'default';
}

// if (xForLesson2 === '' || xForLesson2 === 0 || xForLesson2 === null || xForLesson2 === false || xForLesson2 === NaN || xForLesson2 === undefined) {
//     xForLesson2 = 'default';
// }

type CoursesDurationType = {
    title: string,
    monthDuration: number,
}

let coursesAndDurationArray: CoursesDurationType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}


//==========================

            // LESSON3

for (let i: number = 0; i < 10; i++ ) {
    document.write(`
       <div>TASK1</div>
   `)
}

//=====================

for (let a: number = 0; a < 10; a++) {
    document.write(`
       <div>TASK(2) ${a}</div>
   `)
}

//=================
let d: number = 0;
while (d < 20) {
    document.write(`
       <h1>TASK3</h1>
   `)
    d++
}

//======================================

let b: number = 0;
while (b < 20) {
    document.write(`
       <h1>TASK(4) ${b}</h1>
   `)
    b++
}

//=================================
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (let item of listOfItems) {
    document.write(`
       <li>${item}</li>
  `)
}

document.write(`</ul>`);

//========================

type ProductsType = {
    title: string,
    price: number,
    image: string,
}

let products: ProductsType[] = [
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
   `)
}

//====================

type UsersForLesson3 = {
    name: string,
    age: number,
    status: boolean,
}

let users: UsersForLesson3[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
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

function square(a: number, b: number): number {
    let result: number = a * b;
    console.log(result);
    return result;
}
square(5, 7);

//================================

function squareCircle(r: number): number {
    let resultSquare = Math.PI * r * r;
    console.log(resultSquare);
    return resultSquare;
}
squareCircle(5);

function squareCylinder(h: number, radius: number): number {
    return 2 * Math.PI * radius * (radius + h);
}
console.log(squareCylinder(6, 2));

//===================================

function someArray(arr:( number | boolean | string)[]): void {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}
someArray([15, false, 'name'])

//======================================

function someText(text: string): void {
     document.write(`<p>${text}</p>`)
}
someText('fsgdfgdfg');

//==========================================

function foobar(textForLi: string): void {
    document.write(`<ul>    
       <li>${textForLi}</li>
       <li>${textForLi}</li>
       <li>${textForLi}</li>   
    </ul>`);
}
foobar('Some Text');

//==============================================

function foobar2(text: string, quantity: number): void {
    document.write(`<ul>`);
    for (let i: number = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
foobar2('fsdgsgd', 5);

//========================================

function someArray2(arr: (number | string | boolean)[]): void {
    document.write(`<ul>`);
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
someArray2([234, '1gdfgdfg', 235, false, 23, true]);

//========================================

type FoobarForLesson4Type = {
    id: number,
    name: string,
    age: number,
}

function foobar4(obj: FoobarForLesson4Type[]): void {
    for (let objItem of obj) {
        document.write(`<div>id: ${objItem.id}; name: ${objItem.name}; age: ${objItem.age}</div>`)
    }
}
foobar4([
    {id: 5, name: 'alex', age: 52353},
    {id: 53, name: 'Danya', age: 51233},
    {id: 4, name: 'alex', age: 533},
    {id: 55, name: 'oleg', age: 534},
])

//=====================================

function foobar5(numbers: number[]): number {
     let minNumber = numbers[0];
     for (let i = 1; i < numbers.length; i++) {
         if (minNumber > numbers[i]) {
             minNumber = numbers[i]
         }
     }
     return minNumber;
}
console.log(foobar5([4, 235, -345, -235, 256, 235, -6346]));

//==============================

function sum(arr: number[]): number {
    let result: number = 0;
    for (const arrItem of arr) {
        result += arrItem // iter 1 = 1, iter 2 = 1 + 2
    }
    return result
}
console.log(sum([1,2,3,4,5,6,7]));

//======================================

function swap(arr: number[],index1: number,index2: number): number[] | string {
    if (index1 < arr.length && index2 < arr.length) {
        let value: number = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = value
        return arr;
    }
    return '----';
}

console.log(swap([11,22,33,44],0,2));

//==========================================

type CurrencyType = {
    currency: string,
    value: number,
}

function exchange(sumUAH: number, currencyValues: CurrencyType[], exchangeCurrency: string): number | undefined {
    let chooseValue: CurrencyType | undefined;
    for (let itemExchange of currencyValues) {
        if (itemExchange.currency === exchangeCurrency) {
            chooseValue = itemExchange;
            return sumUAH / chooseValue.value;
        }
    }
}
console.log( exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR') );

//========================================

// LESSON5
//Там тоже самое, что и lesson4

            // LESSON6

let string1: string = 'hello world';
let string2: string = 'lorem ipsum';
let string3: string = 'javascript is cool';

let strings: string[] = [string1, string2, string3];
for (const string of strings) {
    console.log(string.length);
}

//==================================================

for (const string of strings) {
    console.log(string.toUpperCase());
}

//=============================

let s1: string = 'HELLO WORLD';
let s2: string = 'LOREM IPSUM';
let s3: string = 'JAVASCRIPT IS COOL';

let sArr: string[] = [s1, s2, s3];
for (const s of sArr) {
    console.log(s.toLowerCase());
}

//==========================

let str: string = ' dirty string   ';
console.log(str.trim());

//================================

function stringToArray(str1: string): string[] | 'Error' {
    if (str1.trim()) {
        let split: string[] = str1.split(' ')
        return split;
    } else {
        return 'Error';
    }
}
console.log(stringToArray('Ревуть воли як ясла повні'));

//======================================================

let arrForLesson6: number[] = [10,8,-7,55,987,-1011,0,1050,0];

let mappedArrForLesson6: string[] = arrForLesson6.map(value => {
    return value.toString();
})

console.log(mappedArrForLesson6);

//==========================================

 function sortNums(array: number[], direction: string): number[] | undefined {
     if (direction === 'ascending') {
         return nums.sort((num1: number, num2: number): number => num1 - num2);
     }
     if (direction === 'descending') {
         return nums.sort((num1: number, num2: number): number => num2 - num1);
     }
 }
let nums: number[] = [11, 21, 3, 12, 35, 23, 33];
console.log(sortNums(nums, 'descending'));

//=======================================

let coursesAndDurationArray6: CoursesDurationType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

type MappedArray6Type = {
    id: number,
    title: string,
    monthDuration: number,
}

let mappedArray6: MappedArray6Type[] =
    coursesAndDurationArray6.sort((a: CoursesDurationType, b: CoursesDurationType): number => b.monthDuration - a.monthDuration)
        .filter(value => value.monthDuration > 5)
        .map((value: CoursesDurationType, index: number): MappedArray6Type => {
            return {
                id: index + 1,
                title: value.title,
                monthDuration: value.monthDuration
            }
        });
console.log(mappedArray6);

//================================================

type CardType = {
    cardSuit: string,
    cardValue: string,
    color: string,
}

let arrCard: CardType[] = [];

let suits: string[] = ['spade', 'diamond','heart', 'clubs'];
let values: string[] = ['6', '7', '8', '9', '10', 'ace','jack','queen','king']

for (const suit of suits) {
    for (const value of values) {
        let card: CardType = {cardSuit: suit, cardValue: value, color: ''};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red'
        } else {
            card.color = 'black'
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

//===================================

type ReduceCardType = {
    spades: CardType[],
    diamonds: CardType[],
    hearts: CardType[],
    clubs: CardType[],
}

let reduce: ReduceCardType = arrCard.reduce((accum: ReduceCardType, card: CardType): ReduceCardType => {
    if (card.cardSuit === 'spade') {
        accum.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accum.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accum.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accum.clubs.push(card);
    }
    return accum;
}, {spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(reduce);

//==============================================================

type CoursesArrayType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[],
}

let coursesArray: CoursesArrayType[] = [
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

console.log(coursesArray.filter((value: CoursesArrayType): boolean => {
    return value.modules.includes('sass');
}));

console.log(coursesArray.filter((value: CoursesArrayType): boolean => {
    return value.modules.includes('docker');
}));





