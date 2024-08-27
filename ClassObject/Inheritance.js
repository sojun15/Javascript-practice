class University{
    constructor(total){
        console.log('total discipline:',total);
    }
    display(){
        console.log('it is university class display method');
    }
}

class Student extends University{
    constructor(name,total){
        super(total);
        console.log(`Name of university: ${name}`);
    }
    display2(){
        console.log('it is student class display method');
        super.display();
    }
}

let student = new Student('khulna university',29);
student.display();
student.display2();