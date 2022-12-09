const jonsaArray = [
    'Jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven']
];

const types = [];
for(let i = 0; i<jonsaArray.length;i++){
    console.log(jonsaArray[i], typeof jonsaArray[i]);
    types.push(typeof jonsaArray[i]);
    // types[i] = typeof jonsaArray[i];
}
console.log(types);


const years = [1991,2007,1969,2020];
const ages = [];

for(let i = 0 ; i<years.length ; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("----ONLY STRINGS-----")
for(let i=0 ; i<jonsaArray.length; i++){
    if(typeof jonsaArray[i] !== 'string') continue;

    console.log(jonsaArray[i], typeof jonsaArray[i]);
}

console.log("-----break when a number----")
for(let i=0 ; i<jonsaArray.length; i++){
    if(typeof jonsaArray[i] ==='number') break;

    console.log(jonsaArray[i], typeof jonsaArray[i]);
}