let set = new Set();
// when set will find the same value in multiple time then it will discard the same values 
set.add('sojun');
set.add('sourov');
set.add('mogambel');
set.add('sourov');

console.log(set);

set.delete('sourov');
console.log(set.size);
console.log(set.has('sourov'));
console.log(set.values());
set.clear();
console.log(set);