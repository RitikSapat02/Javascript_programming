let text ='';
const cars = ['volvo','lambo','BMW','Tom'];

put:
{
    text += cars[0];
    text += cars[1];
    break put;
    text += cars[2];
    text += cars[3];
}

console.log(text);