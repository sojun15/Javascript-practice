let sojun = {
    id : 210215,
    discipline : 'cse',
    structure : {
        face : 'ofwhite',
        weight : 66,
        bmi : 21
    }
}
console.log(sojun.id);
console.log(sojun.discipline);
console.log(sojun.structure.weight)
console.log(sojun.structure.bmi);

for(let props in sojun){
    console.log(props,"=",sojun[props]);
}