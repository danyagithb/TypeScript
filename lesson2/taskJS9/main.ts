let divContainer: HTMLDivElement = document.createElement('div');
document.body.appendChild(divContainer);

let div: HTMLDivElement = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

let cloneDiv: Node = div.cloneNode(true);

divContainer.append(div, cloneDiv);



//============================

let array: string[] = ['Main', 'Products', 'About', 'Contacts'];

let ul: HTMLUListElement = document.createElement('ul');
divContainer.appendChild(ul);

for (const arrayItem of array) {
    let li: HTMLLIElement = document.createElement('li');
    li.innerText = arrayItem;
    ul.appendChild(li);
}

//==================================

let coursesAndDurationArray9: CoursesDurationType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let divBlockCourses: HTMLDivElement = document.createElement('div');
divContainer.appendChild(divBlockCourses);

for (const itemObj of coursesAndDurationArray9) {
    let divItemCourses: HTMLDivElement = document.createElement('div');

    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.innerText = itemObj.title;
    let text: HTMLParagraphElement = document.createElement('p');
    text.innerText = 'monthDuration: ' + itemObj.monthDuration

    divBlockCourses.appendChild(divItemCourses);
    divItemCourses.append(h2, text);
}

//============================

let divBlockCourses2: HTMLDivElement = document.createElement('div');
divContainer.appendChild(divBlockCourses2);

for (const itemObj2 of coursesAndDurationArray) {
    let divItemCourses2: HTMLDivElement = document.createElement('div');

    let title: HTMLHeadingElement = document.createElement('h1');
    title.innerText = itemObj2.title;
    title.classList.add('heading');

    let description: HTMLParagraphElement = document.createElement('p');
    description.innerText = 'monthDuration: ' + itemObj2.monthDuration;
    description.classList.add('description');

    divBlockCourses2.appendChild(divItemCourses2);
    divItemCourses2.append(title, description);
}
