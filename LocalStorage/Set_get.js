//! localStorage
//? localStorage.setItem(key,value) localStorage.getItem(key)

let student = {
    name: 'sojun',
    id: 15,
    discipline:'cse'
}
try{
    //? to set the item into localStorage there use setitem()
    console.log('local storage set items');
    localStorage.setItem('studentData',JSON.stringify(student));
    localStorage.setItem('studentInfo',JSON.stringify(student));

    //? to get the item from localStorage there use getitem()
    console.log('localStorage.getItem');
    console.log(localStorage.getItem('studentData'));

    //? to delete the item from localStorage there use removeitem()
    console.log('localStorage.removeitem');
    localStorage.removeItem('studentInfo');
}
catch(error){
    console.log(error);
}
finally{
    console.log('finally block')
}