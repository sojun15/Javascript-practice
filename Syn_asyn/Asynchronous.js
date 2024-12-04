//! Example of get request (see one or more requests)

let getRequest = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())  // after fatching convert the response into json
    .then(json=>console.log(json))  // after convertion print the json file
    .catch((error)=>console.log(error)) // if there face any error any case fatching or convertion then there will show that error
}

getRequest(5)

//! Example of post request (add new request)

let postRequest = () => {
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch((error)=> console.log(error));
}

postRequest();

//! Example of delete request

let deleteRequest = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`,{
        method:"DELETE"
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch((error)=> console.log(error));
}

deleteRequest(6);

//! Example of put request

let updateRequest = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`,{
        method:"PUT",
        body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch((error)=> console.log(error));
}

updateRequest(7);

// asyn & await
let asynchronous = async () => {
    try{
        let fetching = await fetch(`https://fakestoreapi.com/products/2`) // while there willn't end fetching then our program willn't go next line
        let data = await fetching.json()  // while there willn't end converting json then our program willn't go next line
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

asynchronous();