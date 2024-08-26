let mymap = new Map();

mymap.set('std1',1);
mymap.set('std2',2);
mymap.set('std3',3);
mymap.set('std4',4);

for(let key of mymap.keys()){
    console.log(`key: ${key}`);
}

for(let value of mymap.values()){
    console.log(`value: ${value}`);
}

// to delete any single element use it 
mymap.delete('std4');
// to get any single element value use it 
console.log(mymap.get('std3'));
// to delete all elements use it 
mymap.clear();
// to check any element has or not use it 
console.log(mymap.has('std4'));