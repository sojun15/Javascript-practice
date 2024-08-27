let product = 'vivo y51';
let price = 20000;

let mobile = ()=>{
    console.log(`mobile name: ${product}, price:${price}`);
}

class electronic{
    onion = ()=>{
        console.log('onion class method is imported from india')
    }
}

export{product,price,mobile,electronic};