//          CONVERTING TO STRING

//toString()
const fruits = ["Bananna", 'Mango', "Grapes","orange"];
const stringFruits = fruits.toString();
console.log(stringFruits);

//join()
const fruits1=["Banana",'Mango','Grapes',"orange"];
const stringFruits1 = fruits1.join("%");
console.log(stringFruits1);


//          ADD ELEMENTS

//push()                          //at last
const fruits2=["Banana",'Mango','Grapes',"orange",1];
const fruit=fruits2.push('Cherry');
console.log(fruit);
console.log(fruits2);

//unshift()                      //at start
fruits2.unshift('papaya');
console.log(fruits2);


//          REMOVE ELEMENTS
//pop()                          //last
fruits2.pop();              
console.log(fruits2); 

//shift()
fruits2.shift();                  //start
console.log(fruits2)


//             OTHERS
//indexOf()
console.log(fruits.indexOf('Grapes'));

//includes()
console.log(fruits2.includes('1'));

if(fruits.includes('Mango')){
    console.log("Its there !")
}

//delete
bos = ["boys","girls",1,false,"string"];
delete bos[2];
console.log(bos[2]);    //undefined

//concat()
const myBoys = ["roy","adi","manav","Baban"];
const myGirls = ["aditi","sayali","aish","shradha","iliana","kareena","madhuri"];
const girls = ['Urvashi',"smriti","mandhana","kajol","preity",'anushka','deepika','alia','kriti']
const myChildrens = myBoys.concat(myGirls,girls);
console.log(myChildrens);

//splice
const fhal = ['Banana','Orange','Apple',"Mango"];
fhal.splice(2,1,"Lemon",'Kiwi');
console.log(fhal);

//slice
const a = ['Banana','Orange','Apple',"Mango"];
const ab = a.slice(2);
console.log(ab);
console.log(a.slice(1,4));