"use strict";
let buttonTask1 = document.getElementById('button-task1');
if (buttonTask1) {
    buttonTask1.onclick = function () {
        let div = document.getElementById('text');
        if (div) {
            div.style.display = 'none';
        }
    };
}
// //===============================
let f = document.forms;
let form = f[0];
let text = document.getElementById('text3');
if (form) {
    form.onsubmit = function (ev) {
        ev.preventDefault();
        let name = form.userName.value;
        let surname = form.userSurName.value;
        let age = form.userAge.value;
        let obj = { name, surname, age };
        if (text) {
            text.innerText = obj.name + ' ' + obj.surname + ' ' + obj.age;
        }
    };
}
//=================
let currentNumber = +(localStorage.getItem('number') ?? 0);
currentNumber += 1;
localStorage.setItem('number', currentNumber.toString());
let task4 = document.getElementById('task4');
if (task4) {
    task4.innerText = currentNumber.toString();
}
//==========================
let sessionsList = JSON.parse(localStorage.getItem('sessionsList') ?? '[]').map((item) => new Date(item));
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
