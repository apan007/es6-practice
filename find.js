// array find method 

const products = [
    {name: 'samsung phone', color: 'silver', price: 10000},
    {name: 'hp laptop', color: 'white', price: 36000},
    {name: 'apple  monitor', color: 'blue', price: 14000},
    {name: 'casio watch', color: 'black', price: 5000},
]

const favProduct = products.find(product => product.price == 5000);
console.log(favProduct);