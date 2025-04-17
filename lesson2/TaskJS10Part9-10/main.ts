document.addEventListener('DOMContentLoaded', () => {
    const priceKey: string = 'price';
    const lastTimeKey: string = 'lastTime';

    const currentTime: number = new Date().getTime();

    let price: number = +(localStorage.getItem(priceKey) ?? 100);
    let lastTime: number = +(localStorage.getItem(lastTimeKey) ?? 0);

    if (currentTime - lastTime > 10000) {
        price += 10;
        localStorage.setItem(priceKey, price.toString());
        localStorage.setItem(lastTimeKey, currentTime.toString());
    }

    const div: HTMLDivElement = document.createElement('div');
    div.innerText = price.toString();
    document.body.appendChild(div);
});

//============================================

type ListType = {
    text: string
}

const itemsLesson10: ListType[] = Array.from(
    {length: 100},
    (_, i: number): ListType => ({text: `item ${i + 1}`})
);

const boxContainer: HTMLElement | null = document.getElementById('box');
const prevButton: HTMLButtonElement | null = document.getElementById('prev') as HTMLButtonElement;
const nextButton: HTMLButtonElement | null = document.getElementById('next') as HTMLButtonElement;

let currentPage: number = 1;
const itemsForPage = 10;


function sortItems(): void {
    if (boxContainer) {
        boxContainer.innerHTML = '';
        let start: number = (currentPage - 1) * itemsForPage;
        let end: number = start + itemsForPage;
        let itemsSlice: ListType[] = itemsLesson10.slice(start, end);

        itemsSlice.forEach((item: ListType): void => {
            let liForItem: HTMLLIElement = document.createElement('li');
            liForItem.innerText = item.text;
            boxContainer.appendChild(liForItem);
        });
    }

    if (prevButton) {
        prevButton.disabled = currentPage === 1;
    }
    if (nextButton) {
        nextButton.disabled = currentPage === 10;
    }

}

if (prevButton) {
    prevButton.onclick = function (): void {
        if (currentPage > 1) {
            currentPage--;
            sortItems()
        }
    };
}

if (nextButton) {
    nextButton.onclick = function (): void {
        if (currentPage < 10) {
            currentPage++;
            sortItems();
        }
    }
}

sortItems();

