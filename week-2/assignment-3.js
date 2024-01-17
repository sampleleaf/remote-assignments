function calculate(data){
    for(let i = 1; i < data.products.length; i++){
        data.products[0].price += data.products[i].price
    }
    return data.products[0].price * ( 1 - data.discount )
}

const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 1",
            price: 250
        }
    ]
})

console.log(discountedPrice)

// let data = {
//     discount: 0.1,
//     products: [
//         {
//             name: "Product 1",
//             price: 100
//         },
//         {
//             name: "Product 2",
//             price: 700
//         },
//         {
//             name: "Product 1",
//             price: 250
//         }
//     ]
// }

// console.log(data.products[0].price)