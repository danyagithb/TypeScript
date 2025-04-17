"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const priceKey = 'price';
    const lastTimeKey = 'lastTime';
    const currentTime = new Date().getTime();
    let price = +(localStorage.getItem(priceKey) ?? 100);
    let lastTime = +(localStorage.getItem(lastTimeKey) ?? 0);
    if (currentTime - lastTime > 10000) {
        price += 10;
        localStorage.setItem(priceKey, price.toString());
        localStorage.setItem(lastTimeKey, currentTime.toString());
    }
    const div = document.createElement('div');
    div.innerText = price.toString();
    document.body.appendChild(div);
});
const itemsLesson10 = Array.from({ length: 100 }, (_, i) => ({ text: `item ${i + 1}` }));
const boxContainer = document.getElementById('box');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentPage = 1;
const itemsForPage = 10;
function sortItems() {
    if (boxContainer) {
        boxContainer.innerHTML = '';
        let start = (currentPage - 1) * itemsForPage;
        let end = start + itemsForPage;
        let itemsSlice = itemsLesson10.slice(start, end);
        itemsSlice.forEach((item) => {
            let liForItem = document.createElement('li');
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
    prevButton.onclick = function () {
        if (currentPage > 1) {
            currentPage--;
            sortItems();
        }
    };
}
if (nextButton) {
    nextButton.onclick = function () {
        if (currentPage < 10) {
            currentPage++;
            sortItems();
        }
    };
}
sortItems();
