const mark = {
    fullName : "Mark Miller",
    mass : 78 ,
    height : 1.69,

    calcBMI : function()
    {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }

}

const John = {
    fullName : "John Smith",
    mass : 92 ,
    height : 1.95,

    calcBMI : function()
    {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }

}

John.calcBMI();
mark.calcBMI();

console.log(mark['BMI'], John['BMI']);
mark.BMI > John.BMI ? console.log(mark['fullName'],mark.BMI) : console.log(John['fullName'],John.BMI);