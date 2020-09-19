function avg(data) {
    let allProducts = data.products; // get product array of objects
    let sumPrice = 0;
    let avgPrice = 0;
    for (var i = 0; i < allProducts.length; i++) {
        productPrice = allProducts[i].price; // get each product price
        sumPrice += productPrice;
    }
    avgPrice = sumPrice / allProducts.length; // sum of product price divided by number of products
    return avgPrice;
}

console.log(
    avg({
        size:3,
        products:[
            {
                name:"Product 1",
                price:100
            },
            {
                name:"Product 2",
                price:700
            },
            {
                name:"Product 3",
                price:250
            }
        ]
    })
) // should print the average price of all products