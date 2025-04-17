interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}

interface ICart {
    id: number;
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
    products: IProduct[];
}

interface ICartResponse {
    carts: ICart[]
}

fetch('https://dummyjson.com/carts')
    .then((value: Response): Promise<ICartResponse> => value.json())
    .then((cartObj: ICartResponse): void => {
        let {carts} = cartObj;
        for (const cart of carts) {
            let container: HTMLDivElement = document.createElement('div');
            document.body.append(container);

            let info: HTMLDivElement = document.createElement('div');
            info.innerText = `
               Total - ${cart.total}
               Discounted Total - ${cart.discountedTotal}
               User Id - ${cart.userId}
               Total Products - ${cart.totalProducts}
               Total Quantity - ${cart.totalQuantity}
            `;

            let ol: HTMLOListElement = document.createElement('ol');
            for (let cartProduct of cart.products) {
                let li:HTMLLIElement = document.createElement('li');
                li.innerText = `
                    id - ${cartProduct.id}
                    title - ${cartProduct.title}
                    price - ${cartProduct.price}
                    quantity - ${cartProduct.quantity}
                    total - ${cartProduct.total}
                    Discount Percentage - ${cartProduct.discountPercentage}
                    Discounted Total - ${cartProduct.discountedTotal}
                `
                let img:HTMLImageElement = document.createElement('img');
                img.src = cartProduct.thumbnail

                li.appendChild(img);
                ol.appendChild(li);
            }
            container.append(info, ol);
        }
    });
