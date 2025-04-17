"use strict";
let input = document.getElementById('weight');
let div6 = document.getElementById('result');
if (input) {
    input.addEventListener('input', function (event) {
        if (div6) {
            const target = event.target;
            div6.innerText = (parseFloat(target.value) * 2.2).toFixed(2);
        }
    });
}
//=====================
function addToLocalStorage(arrayName, objToAdd) {
    const item = localStorage.getItem(arrayName);
    if (!item) {
        throw new Error('Массив не найден');
    }
    let array = JSON.parse(item);
    if (typeof objToAdd === 'object' && !Array.isArray(objToAdd)) {
        array.push(objToAdd);
    }
    else {
        throw new Error('Переданный элемент не является объектом');
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', { id: 1, name: 'Session Name' });
//===========================================
let table = document.getElementById('table');
let tableForm = document.forms[0];
if (tableForm) {
    tableForm.onsubmit = function (e) {
        if (!table) {
            throw new Error('Элемент таблицы не найден');
        }
        table.innerText = '';
        e.preventDefault();
        if (tableForm !== null) {
            const elements = tableForm.elements;
            const linieValue = parseInt(elements.strings.value);
            const cellValue = parseInt(elements.cells.value);
            const textValue = elements.textInside.value;
            for (let i = 0; i < linieValue; i++) {
                const tr = document.createElement('tr');
                for (let j = 0; j < cellValue; j++) {
                    const td = document.createElement('td');
                    td.innerText = textValue;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        }
    };
}
