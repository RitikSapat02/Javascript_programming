const jonas = {
    firstName : 'jonas',
    lastName : 'schmedtmann',
    birthyear:1991,
    job : 'teacher',
    friends : ['Michael', "peter", 'steven'],
    obj : {
        boy : 2,
        girl : 3
    },
    bool : true,

    // calcAge : function(birthyear){                  //without this
    //     return 2037 - 1991;
    // }

    
    // calcAge : function(){
    //     console.log(this);                 
    //     return 2037 - this.birthyear;               //with this
    // }

    
    calcAge : function(){
        this.age=2037 - this.birthyear;
        return this.age;
    }


};
console.log(jonas.calcAge());
console.log(jonas.age);

//challenge
//'jonas is a 46-year old teacher, and he has a driver's licence

const jonas2 = {
    firstName : 'jonas',
    lastName : 'schmedtmann',
    birthyear:1991,
    job : 'teacher',
    hasDriversLicence: false,

    calcAge : function(){
        this.age=2037 - this.birthyear;
        return this.age;
    },
    getsummary : function()
    {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and has ${this.hasDriversLicence ? "a" : 'no'} driver's licence!`
    }
}

console.log(jonas2.getsummary());