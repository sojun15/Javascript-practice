let city1 = ['dhaka','cumilla','chattagram'];
let city2 = ['khulna','barisal','jasshore'];

let city = [...city1,...city2];
city = [...city,'rajshahi','satkhira'];

for(item of city)
{
    console.log(item);
}
// for printing output write in console (node spreadOperator.js)