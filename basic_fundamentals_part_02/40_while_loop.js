let i=1;
while(i<=10){
    console.log(i);
    i++;
}


let dice = Math.trunc(Math.random()*6)+1;
while(dice!==6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
}