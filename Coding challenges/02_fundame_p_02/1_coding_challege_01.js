const calAverage = (a,b,c)=>{
    return (a+b+c)/3;
}

const averageDolhines = calAverage(44,23,71);
const averageKoalas = calAverage(65,54,49);

const checkWinner = function(averageDolhines,averageKoalas){
    if(averageDolhines >=2*averageKoalas)
    {
        console.assertlog("Dolphine wins");
    }
    else if(averageKoalas>=2*averageDolhines){
        console.log("Koalas wins");
    }
    else
    {
        console.log("No team wins")
    }
}

checkWinner(averageDolhines,averageKoalas);