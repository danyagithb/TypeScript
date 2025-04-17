"use strict";
let sessionsList1 = JSON.parse(localStorage.getItem('sessionsList') ?? '[]');
for (const sessionsListElement of sessionsList1) {
    let div = document.createElement('div');
    div.innerText = sessionsListElement.toString();
    document.body.appendChild(div);
}
