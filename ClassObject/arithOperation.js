class arithOperation{
    number1;
    number2;
    constructor(number1,number2){
        this.number1 = number1;
        this.number2 = number2;
    }
    multiplication(){
        return this.number1*this.number2;
    }
}
let op = new arithOperation(5,6);
console.log('multiplication:',op.multiplication());