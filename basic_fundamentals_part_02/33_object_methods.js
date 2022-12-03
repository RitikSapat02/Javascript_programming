const jonas = {
    firstName : 'jonas',
    lastName : 'schmedtmann',
    age :2037-1991,
    job : 'teacher',
    friends : ['Michael', "peter", 'steven'],
    obj : {
        boy : 2,
        girl : 3
    },
    bool : true,

    calcAge : function(birthyear){
        return 2037 - 1991;
    }
};

console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));