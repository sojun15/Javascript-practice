let arrow = ()=> {
    console.log("this arrow function don't return anything");
}
arrow();

let arrow2 = (text)=> {
    return text;
}
console.log(arrow2("this arrow function return this text"));

let arrowRest = (...numbers)=> {
    for(let number of numbers){
        console.log(number);
    }
}
arrowRest(1,2,15,31);