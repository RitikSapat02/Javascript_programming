bills = [22,295,176,440,37,105,10,1100,86,52];
tips = [];
totals = [];

const calctip = function(billValue)
{
    return billValue>=50 && billValue<=300 ? 0.15*billValue : 0.2*billValue;
}

for(let i =0; i<bills.length; i++)
{
    tips.push(calctip(bills[i]));
    totals.push(bills[i]+tips[i]);
}

for(let i =0; i<bills.length; i++)
{
   console.log(`${bills[i]} + ${tips[i]} = ${totals[i]}`);
}

const Average = arr => {
    let sum = 0;
    for(let i=0; i<arr.length ; i++ )
    {
        sum +=arr[i];
    }
    return sum /arr.length;
}

console.log(`Avrage bills = ${Average(bills)}, tips = ${Average(tips)},totals = ${Average(totals)}`);
