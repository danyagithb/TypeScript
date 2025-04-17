"use strict";
fetch('https://dummyjson.com/carts')
    .then((value) => value.json())
    .then((cartObj) => {
    let { carts } = cartObj;
    for (const cart of carts) {
        let container = document.createElement('div');
        document.body.append(container);
        let info = document.createElement('div');
        info.innerText = `
               Total - ${cart.total}
               Discounted Total - ${cart.discountedTotal}
               User Id - ${cart.userId}
               Total Products - ${cart.totalProducts}
               Total Quantity - ${cart.totalQuantity}
            `;
        let ol = document.createElement('ol');
        for (let cartProduct of cart.products) {
            let li = document.createElement('li');
            li.innerText = `
                    id - ${cartProduct.id}
                    title - ${cartProduct.title}
                    price - ${cartProduct.price}
                    quantity - ${cartProduct.quantity}
                    total - ${cartProduct.total}
                    Discount Percentage - ${cartProduct.discountPercentage}
                    Discounted Total - ${cartProduct.discountedTotal}
                `;
            let img = document.createElement('img');
            img.src = cartProduct.thumbnail;
            li.appendChild(img);
            ol.appendChild(li);
        }
        container.append(info, ol);
    }
});
