let products = [
    {name:'computer',price:5000,brand:'hp'},
    {name:'mobile',price:2000,brand:'vivo'},
    {name:'charger',price:350,brand:'mi'}
]

let Filtering_product = products.filter(product => {
    return product.price>1000})
    .map(x=> x.name)

console.log(Filtering_product)