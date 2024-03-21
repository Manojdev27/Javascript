function myFunction(){
    console.log("Hello World, This is my first Javascript function");
  }

  myFunction();//Hello World, This is my first Javascript function


//By using the below method, we can declare and call or invoke the function at the sametime, This is called immediately invoked function

  (function anotherFunction(){
    console.log("Hello");
  })(); //Hello

  //Parameterized Function
  function myFunction2(param1, param2){
    console.log(param1);
    console.log(param2);
  }

  myFunction2(20, 'Zach');

  //Anonymous Function
  const anotherFunction = function() {
    console.log("another Thing");
  }

  anotherFunction();//another Thing

  //Fat arrow Function
  const arrowFunction = () => {
    console.log("This is an arrow function");
  }

  arrowFunction();//This is an arrow function

  // without having return values the function is not return the values

  const newFunction2 = () => {
    const a = 20;
  } 

  const result1 = newFunction2();

  result1; //undefined

  // Having return statement it does return a value of the function.
  const newFunction1 = () => {
    const a = 20;
  return a;
  }

  const result = newFunction1();

  result //20

  const newFunction3 = () => {
    const a = 20;
  return a < 30;
  }

  const result2 = newFunction3();

  result2; //true

  const newFunction4 = () => {
    let myNumber = 20;
  return myNumber;
  myNumber = 50;
  }

  const myNumber2 = 20;

  let myFunction5 = () => {
    if(myNumber2 < 50){
      return "returned the function early";
    }
  return 40;
  }

  myFunction5(); //"returned the function early"

  function myFunction6() {
    return 20;
  }

  myFunction6();

  const alliasVariable = myFunction6;

  alliasVariable();

  const myObj1 = {
    prop1: 50,
    prop2: myFunction6
  }

  myObj1.prop2();//20 

  //Javascript Builtin functions

const myString = "Zach";
myString.replace('h', 'k');//"Zack"

console.log(myString);//"Zach"


const newName = myString.replace('k', 'h');

console.log(newName);//"Zach"


const capitalize = newName.toUpperCase();

console.log(capitalize);//ZACH

const lowerCase = newName.toLowerCase(); 
console.log(lowerCase);//zach

let str = "hello world";

const result4 = str.toUpperCase().split(" ");

console.log(result4); //Array [ "HELLO", "WORLD" ]

result.indexOf("WORLD"); //1 

const step1 = str.toUpperCase(); 
const step2 = step1.split(" "); 
console.log(step1);//HELLO WORLD
console.log(step2); //Array [ "HELLO", "WORLD" ]
const step3 = step2.indexOf("WORLD");
console.log(step3);//1

// Reverse a String in Javascript
//Method 1 - using split operator 
function solution(str){
  return str.split('').reverse().join('');
}

solution("Javascript");

//Method 2 - using spread operator
function solution2(str){
  return [...str].reverse().join('');
}

solution2("Javascript");

//Find Even or odd

function evenOrOdd(number) {
 
  if(number%2 == 0){
    console.log("The number is even");
  }
  else{
    console.log("The number is odd"); 
  }
}

evenOrOdd(21);//The number is odd

// To check the vowel count
function getCount(str){
  let vowelCount = 0;
  const arr = str.split("");

  for(let i = 0; i <arr.length; i++){
      switch(arr[i]){
        case 'a':
          vowelCount++;
          break;
          case 'e':
          vowelCount++;
          break;
          case 'i':
          vowelCount++;
          break;
          case 'o':
          vowelCount++;
          break;
          case 'u':
          vowelCount++;
          break;
      }
    }
  return vowelCount;
}

getCount("JavaScript")//3

//Greet Function with name
function greet(name){
  if(name === "Johnny"){
     return "Hello, my love!";
 }
 
 return "Hello, " + name + "!";

}

greet("Johnny");//Hello, my love!

// Check n is divisible by both X and Y

function isDivisible(n, x, y) {
  if((n%x == 0) && (n%y == 0)){
    return "true because" + n + "is divisible by " + x + "and" + y; 
  }
  else{
    console.log("Not divisible by x and y");
  }
}

// Return a Negative number

function makeNegative(num) {
  if(num < 0){
    return num;
  }
  else{
    return num * -1;
  }
}

makeNegative(5); //-5

//find the smallest number in an array

class SmallestIntegerFinder {
  findSmallestInt(arrayOfNumbers) {
    
    let smallestNumber;
    
    for(let i = 0; i < arrayOfNumbers.length; i++){
      
      const arrNum = arrayOfNumbers[i];
      
      if(i === 0){
        smallestNumber = arrNum;
      }
      
      if(arrNum < smallestNumber){
        smallestNumber = arrNum;
      }
    }
    
    return smallestNumber;
  }
}

//Summation 

var summation2 = function (num) {
  let sum = 0;
  
  for(let i = 0; i <= num; i++){
    sum = sum + i;
  }
  return sum;
}

summation2(9); //45

// Find the average of an Array

function getAverage(marks){
  const count = marks.length;
 let sum = 0;
   
   for(let i = 0; i < count; i++){
 
     sum = sum + marks[i];
   }
   
   return Math.floor(sum / count);
 }

 getAverage([11,14,15,17,18,19,20]); //16 

 //Rock, Paper, Scissors

 const rps = (p1, p2) => {
  if ((p1 === 'scissors') && (p2 === 'paper' )){
    return 'Player 1 won!';
  }
  
  else if ((p1 === 'rock') && (p2 === 'scissors')){
    return 'Player 1 won!';
  }

  else if ((p1 === 'paper') && (p2 === 'rock')){
    return 'Player 1 won!';
  }
  else if ((p1 === 'rock') && (p2 === 'paper')){
    return 'Player 2 won!';
  }
  else if((p1 === 'paper') && (p2 ==='scissors')){
     return 'Player 2 won!';
  }
  
  else if((p1 === 'scissors') && (p2 === 'rock')){
     return 'Player 2 won!';
  }
  
  else if((p1 === 'paper') && (p2 === 'paper')){
     return 'Draw!';
  }
  else if((p1 ==='scissors') && (p2 ==='scissors')){
     return 'Draw!';
  }
  else if((p1 === 'rock') && (p2 ==='rock')){
     return 'Draw!';
  }
  
};

rps('rock', 'rock'); //Draw!

//function to remove the first and last chararcter of the String
function removeChar(str){
  const lengthOfString = str.length;
    
    return str.substr(1, lengthOfString -2);

    // or
    
    return str.substring(1, lengthOfString -1);
    
  };

  //sum of only positive numbers in an array
  
  function positiveSum(arr) {
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        sum = sum + arr[i];
      }
    }
    
    return sum;
  }

  positiveSum([1,3,5,7,9,10,11,15,17,-42,36]);//114


  //Basic Mathematical Operations

  function basicOp(operation, value1, value2){
    switch(operation){
        case "+":
        return value1 + value2;
        break;
        case "-":
        return value1 - value2;
        break;
        case "*":
        return value1 * value2;
        break;
        case "/":
        return value1 / value2;
        break;
        case "%":
        return value1 % value2;
        break;
    }
    
  }
  basicOp("+", 4, 89);//93 


  // String Repeat

  function repeatStr (n, s) {
  
    let starterString = '';
    
    for(let i = 0; i< n; i++){
      starterString = starterString + s;
    }
    return starterString;

    //Another method is by using repeat() function
    return s.repeat(n);
  }

  repeatStr(7, "Javascript"); // "JavascriptJavascriptJavascriptJavascriptJavascriptJavascriptJavascript" 

  //Convert a string to an array

  function stringToArray(string){

    return string.split(' ');
  
  }

  stringToArray("Manoj Kumar");//Array [ "Manoj", "Kumar" ]

// Remove String Spaces

  function noSpace(x){

    return x.split(' ').join('');
  }

  noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"); //"8j8mBliB8gimjB8B8jlB"

  // Given an array of integers, return a new array with each value doubled.

  function maps(arr){

    const result = arr.map((arrItem) => {
      return arrItem * 2;
    });
    
    return result;
  }

  maps([2,3,4]); // Array(3) [ 4, 6, 8 ]

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return true if yes, false otherwise 

function hero(bullets, dragons){

  return bullets / dragons >= 2;
}

hero(6, 3);//true
hero(6,6); //false

// Array plus array

function arrayPlusArray(arr1, arr2) {
  
  let sum = 0;
  
  for(let i = 0; i< arr1.length; i++){
    const arrValue1 = arr1[i];
    const arrValue2 = arr2[i];
    
    const addValue = arrValue1 + arrValue2;
    
    sum = sum + addValue;
    
  }
  
  return sum; 
}

arrayPlusArray([1,2,3], [5,7,8]); //26 
arrayPlusArray([1,2,3,1], [5,7,8,4]); //31

// Another way to add arrays using reduce method

function addArray(arr1, arr2){
  return arr1.concat(arr2).reduce((arr, newArray) => arr + newArray);
}

addArray([79, 80 ,81], [90, 92, 93]); //515 

// Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
  
  return Math.ceil(year/100) + "Century";
}

century(1993); //20 
century(1); // 1
century(1520);//16

// Cat years, Dog years

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  
  if(humanYears === 1){
     return [humanYears,15,15];
  }
  if(humanYears === 2){
     return [humanYears,24,24];
  }
  
  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 5;
  
  return [humanYears ,24 + extraCatYears ,24 + extraDogYears];
}

humanYearsCatYearsDogYears(3); // Array(3) [ 3, 28, 29 ]
humanYearsCatYearsDogYears(2);// Array(3) [ 2, 24, 24 ]

// Total amount of points

function points(games) {
  
  let totalPoints = 0;
  
  for(let i=0; i < games.length; i++){
    
    const values = games[i];
    const parts = values.split(":");
    
    const x = parts[0];
    const y = parts[1];
  
    if(x > y){
      totalPoints = totalPoints + 3;
    }
    else if(x === y){
       totalPoints += 1;
    }
  }
  return totalPoints;
}