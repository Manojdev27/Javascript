Math.PI; //3.141592653589793
Math.E //2.718281828459045
Math.abs(-60); //60
Math.floor(Math.PI); //3
Math.ceil(Math.PI); //4
Math.round(Math.PI); //3
Math.min(3,4,5,6); //3
Math.max(3,4,5,6); //6
Math.random(); //0.2556674824264077
Math.random(); //0.5166056645430704
Math.random(); //0.46383338624496473
Math.random(); //0.8262596677737393
const randomNumber = Math.random();
randomNumber; //0.9567204695075625
const largerNumber = randomNumber * 100;
console.log(largerNumber); //95.67204695075625
console.log(Math.floor(largerNumber));//95
console.log(Math.ceil(largerNumber));//96
console.log(Math.round(largerNumber)); //96

const arr = ['some', 'values','blah','blah'];

const randomIndex = Math.floor(Math.random() * arr.length);

arr[randomIndex];  //"blah" 