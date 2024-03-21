// #Selection
// const htmlBody = document.querySelector('body');

// #Writing Function
// const randomClickFunction = function(){
//   const colors = ["#594633","#722d84","red", "green", "blue","purple", "yellow", "orange"];

// const randomIndex = Math.floor(Math.random() * colors.length);
// const randomColor = colors[randomIndex];
// htmlBody.style.backgroundColor = randomColor;
// console.log('The user clicked and set the color to' + randomColor);
// }

// #executing or calling the function
// randomClickFunction()

// #Event Listeners
// htmlBody.onclick = randomClickFunction;


// function onClickEvent(){
//   const el = document.createElement('p');
//   el.innerText = 'Clicked the button';
//   document.querySelector('.container').appendChild(el);
// }
// document.querySelector('button').onclick = onClickEvent;

function doMath(x,y){
  return x*y;
}
doMath(5, 125);

const yourFirstVariable = "Learning code gives me superpowers";

const yourSecondVariable = 20;

const yourThirdVariable = {firstProperty: 'hello World'};

console.log(yourFirstVariable);

// var keyword is redeclarable and incrementable
var newVariable = 10;

var newVariable = 20;

console.log(newVariable); //20

//const is non redeclarable keyword
const newVariable2 = 10;
// Cannot redeclare block-scoped variable 'newVariable2'.
// const newVariable2 = 20;

const counter2 = 0;
counter2 = counter2 + 1;
counter2++;

//let keyword is redeclarable and incrementable  
let counter = 0;
counter =counter+1;
counter++;
console.log(counter);


// An identifier or keyword cannot immediately follow a numeric literal
// const 1yourFirstVariable = 10;//camelcase
const yourFirstVariable1 = 10;//camelcase
const your_first_variable = 10;//snakecase
const YOUR_FIRST_VARIABLE = 10;//constantcase
const yourfirstvariable = 10;//lowercase
const YourFirstVariable = 10;//pascalcase


console.log(yourFirstVariable1);
console.log(your_first_variable);
console.log(YOUR_FIRST_VARIABLE);
console.log(yourfirstvariable);
console.log(YourFirstVariable);

const variablenew = 10;
const variable2 = variable1;
const variable3 = "Zach";
const variable4 = {variableType: "object", variableValue: "some value"};
const variable5 = (function(){
return "Hello, My Name is ";
})();
const variable6 = variable5 + variable3;

console.log(variable6);//Hello, My Name is Zach

const variable1 = 10;

const firstArray =[10,20,30,40];
const SecondArray = [10, 20, "a string", {prop: "slslll"}, [1,2], false]; 

console.log(firstArray);
console.log(firstArray[4]);
console.log(firstArray[3]);
console.log(SecondArray[3]);
console.log(SecondArray[5]);
console.log(typeof(SecondArray[5]));//displays type of the index

const nestedObject = {
  layer1:{
    layer2:{
      layer3:{
         targetValue: 90
    }
    }
  }
}

console.log(nestedObject.layer1.layer2.layer3.targetValue);

const objectFunctionalVariable = function(){
  return 20;
}

console.log(objectFunctionalVariable());//20