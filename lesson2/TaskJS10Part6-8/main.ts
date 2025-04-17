let input: HTMLInputElement | null = document.getElementById('weight') as HTMLInputElement | null;
let div6: HTMLDivElement | null = document.getElementById('result') as HTMLDivElement | null;

if (input) {
    input.addEventListener('input', function (event: Event): void {
        if (div6) {
            const target = event.target as HTMLInputElement;
            div6.innerText = (parseFloat(target.value) * 2.2).toFixed(2);
        }
    });
}

//=====================

function addToLocalStorage<T extends object>(arrayName: string, objToAdd: T): void {
    const item: string | null = localStorage.getItem(arrayName);
    if (!item) {
        throw new Error('Массив не найден');
    }

    let array: T[] = JSON.parse(item);
    if (typeof objToAdd === 'object' && !Array.isArray(objToAdd)) {
        array.push(objToAdd);
    } else {
        throw new Error('Переданный элемент не является объектом');
    }

    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', { id: 1, name: 'Session Name' });

//===========================================

let table: HTMLElement | null = document.getElementById('table');
let tableForm: HTMLFormElement | null = document.forms[0] as HTMLFormElement;

if (tableForm) {
    tableForm.onsubmit = function (e: SubmitEvent): void {
        if (!table) {
            throw new Error('Элемент таблицы не найден');
        }

        table.innerText = '';
        e.preventDefault();

        interface TableFormElements extends HTMLFormControlsCollection {
            strings: HTMLInputElement;
            cells: HTMLInputElement;
            textInside: HTMLInputElement;
        }

        if (tableForm !== null) {
            const elements = tableForm.elements as TableFormElements;

            const linieValue: number = parseInt(elements.strings.value);
            const cellValue: number = parseInt(elements.cells.value);
            const textValue: string = elements.textInside.value;

            for (let i: number = 0; i < linieValue; i++) {
                const tr: HTMLTableRowElement = document.createElement('tr');
                for (let j: number = 0; j < cellValue; j++) {
                    const td: HTMLTableCellElement = document.createElement('td');
                    td.innerText = textValue;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }

        }
    };
}






