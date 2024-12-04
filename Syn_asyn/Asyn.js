let sojun = async() =>{
    let data = await fetch('https://fakestoreapi.com/products/1')
    let result = await data.json();
    await console.log(result);
}
console.log('before function statement')
sojun();
console.log('after function statement')