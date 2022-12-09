const jonas = {
    firstName : 'jonas',
    lastName : 'schmedtmann',
    age :2037-1991,
    job : 'teacher',
    friends : ['Michael', "peter", 'steven'],
    obj : {
        boy : 2,
        girl : 3
    }
};
    
console.log(jonas);

//dot notation
console.log(jonas.lastName);
console.log(jonas.age);
console.log(jonas.agew);             //undefined             

//bracket notation
console.log(jonas['lastName']);
console.log(jonas['age']);
console.log(jonas['2']);

const nameKey = "Name";
console.log(jonas['first' + nameKey]);
console.log(jonas["last" + nameKey]);             //can contain expression

// console.log(jonas.'first'+nameKey);              //error cannot contain expression


//add new properties
jonas.location = "India";
jonas.favCricketer = "Shikhar";
jonas.favNumber = 2;

jonas['twitter'] = '@SapatRitik';
jonas['facebook'] = 'Ritik Sapat';
jonas['color'] = 'fair';

console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and ${jonas.friends[0]} is his best friend!`);
console.log(jonas.obj.boy);