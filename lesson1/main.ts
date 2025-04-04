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

let firstName: string = 'Синегуб';
let middleName: string = 'Данил';
let lastName: string = 'Олегович';
let person: string = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

let a: number = 100;
let b: string = '100';
let c: boolean = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

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
