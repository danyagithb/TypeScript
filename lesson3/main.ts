// Створити функцію, яка робить запити на апі, та віддає результат свого запиту.
// Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь

interface IUser3 {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

function foobar3<SomeType>(url: string): Promise<SomeType> {
    return fetch(url)
        .then((response: Response): Promise<IUser3> => {
            return response.json();
        })
        .then((user: IUser3): SomeType => user as SomeType);
}

foobar3<IUser3>('https://jsonplaceholder.typicode.com/users/1')
    .then((user: IUser3): void => console.log(user));





















