let a = 15;
let b = 16;

//! Example of syntax error 
//? here closing parenthesis are not used
// if (a>b
//     console.log('a is greater number');

//! Example of reference error 
//? here x is not defined
// console.log(x);

//! Example of type mismatch error
//? here number is not string but we perform string operation
// let number = 15;
// number = number.toLowerCase();
// console.log(number);

//! Example of range error
// let numbers = [1,2,3];
// numbers[4] = numbers[4] + 15;
// console.log(numbers[4])

//! Network error
//? when we fetch or post or put data but networking problem it is not performing then there happend network error 

//! Exception handling

// console.log('sojun');
// try{
//     console.log(x);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log('finally block always works');
// }
// console.log('chandra');

let age = Number(prompt('enter your age:'));
if(age>=0 && age<=150)
{
    console.log('you are alive');
}
else 
{
    throw new Error('you enter invalid age');
}