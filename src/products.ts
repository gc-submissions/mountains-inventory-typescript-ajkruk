interface Product {
    name: string,
    price: number,

}

let products: Product[] = [

    {
        name: "Apple",
        price: 1.00,
    },

    {
        name: "Avocado",
        price: 2.00,
    },

    {
        name: "Grapes",
        price: 4.00,
    }
];

function calcAverageProductPrice(products : Product []) : number {
    let total = 0;
    if (products.length < 1 ) {
        return 0;
    }
    for (let item of products) {
        total = total + item.price;
    }
    return total / products.length;
}

const average = calcAverageProductPrice(products);
console.log(average);




export { Product, calcAverageProductPrice }