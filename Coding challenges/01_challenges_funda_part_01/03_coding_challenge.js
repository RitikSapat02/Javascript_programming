// avgDolphins = (96+108+89)/3;
// avgKoalas = (88+91+110)/3;

// if(avgDolphins > avgKoalas){
//     console.log("Dolphines wins the trophy 🏆");
// }else if(avgDolphins < avgKoalas){
//     console.log("Koalas wins the trophy 🏆");
// }else{
//     console.log("Both wins the trophy 🏆");
// }



//BONUS
avgDolphins = (97+112+101)/3;
avgKoalas = (109+95+106)/3;

if(avgDolphins > avgKoalas && avgDolphins>=100){
    console.log("Dolphines wins the trophy 🏆");
}else if(avgDolphins < avgKoalas && avgDolphins>=100){
    console.log("Koalas wins the trophy 🏆");
}else if(avgDolphins===avgKoalas && avgDolphins>=100){
    console.log("Both wins the trophy 🏆");
}else{
    console.log("No one wins the trophy!");
}