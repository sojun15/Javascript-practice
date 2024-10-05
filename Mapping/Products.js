let products = [
    {name:'computer',price:'50000',brand:'hp'},
    {name:'mobile',price:'20000',brand:'vivo'},
    {name:'charger',price:'350',brand:'mi'}
]

let mapping = products.map(product => {
    return product.name;
})

console.log(mapping)