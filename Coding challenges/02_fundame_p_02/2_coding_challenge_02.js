const calctip = billValue =>{
    let tip =  billValue>=50 && billValue<=300 ? 0.15*billValue : 0.2*billValue;
    return tip;
}

const bills = [125 , 555, 44];
const tips = [calctip(bills[0]),calctip(bills[1]), calctip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(bills,tips,total);