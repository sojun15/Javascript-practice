function simple(){
    return 'simple function without parameter';
}

console.log(simple());

function simple2(text,value){
    return `${text} = ${value}`;
}

console.log(simple2('parameter, number',15));