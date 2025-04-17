let buttonTask1: HTMLElement | null = document.getElementById('button-task1');

if (buttonTask1) {
    buttonTask1.onclick = function (): void {
        let div: HTMLElement | null = document.getElementById('text');
        if (div) {
            div.style.display = 'none';
        }
    }
}

// //===============================

let f: HTMLCollectionOf<HTMLFormElement> = document.forms;
let form: HTMLFormElement = f[0];
let text: HTMLElement | null = document.getElementById('text3');

if (form) {
    form.onsubmit = function (ev: SubmitEvent): void {
        ev.preventDefault()
        let name: string = form.userName.value;
        let surname: string = form.userSurName.value;
        let age: number = form.userAge.value;

        type Obj8Type = {
            name: string;
            surname: string;
            age: number
        }

        let obj: Obj8Type = {name, surname, age};
        if (text) {
            text.innerText = obj.name + ' ' + obj.surname + ' ' + obj.age;
        }
    }
}

//=================

let currentNumber: number = +(localStorage.getItem('number') ?? 0);
currentNumber += 1;
localStorage.setItem('number', currentNumber.toString());

let task4: HTMLElement | null = document.getElementById('task4');
if (task4) {
    task4.innerText = currentNumber.toString();
}

//==========================

let sessionsList: Date[] = JSON.parse(localStorage.getItem('sessionsList') ?? '[]').map((item: string) => new Date(item));
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));











