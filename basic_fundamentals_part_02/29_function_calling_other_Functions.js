const cutpieces = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function(apples, oranges)
{
    const applePieces = cutpieces(apples);
    const orangepieces = cutpieces(oranges);
    return `Juice of ${applePieces} applepieces and ${orangepieces} orangepieces`
}

console.log(fruitProcessor(2,3));