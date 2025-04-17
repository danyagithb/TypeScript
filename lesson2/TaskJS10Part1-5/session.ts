let sessionsList1: string[] = JSON.parse(localStorage.getItem('sessionsList') ?? '[]');
for (const sessionsListElement of sessionsList1) {
    let div: HTMLDivElement = document.createElement('div');
    div.innerText = sessionsListElement.toString();
    document.body.appendChild(div);
}