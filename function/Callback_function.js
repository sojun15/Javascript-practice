let calculation = (num1,num2,method) => {
    return method(num1,num2);
}

let addition = (num1,num2) => {
    return num1 + num2;
} 

let subtruction = (num1,num2) => {
    return num1 - num2;
} 

console.log(calculation(15,5,addition));
console.log(calculation(15,5,subtruction));