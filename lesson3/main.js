"use strict";
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту.
// Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь
function foobar3(url) {
    return fetch(url)
        .then((response) => {
        return response.json();
    })
        .then((user) => user);
}
foobar3('https://jsonplaceholder.typicode.com/users/1')
    .then((user) => console.log(user));
