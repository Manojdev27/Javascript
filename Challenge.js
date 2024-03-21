
const myBoolean = true;

const myString = "Hello World";

const firstNumber = 20;

let secondNumber = 40;

secondNumber = 80;

const myArray = [myBoolean, myString];

const myObject = {firstProperty: myArray, sumProperty: firstNumber + secondNumber};

console.log(myObject);

console.log(myObject.sumProperty);

console.log(myObject.firstProperty[1]);

const ObjectVariable = {
    property1:'i am property1',property2: 'i am property2',property3:[20,30,40]
}

console.log(ObjectVariable.property3[2]);

const myArray2 = [20, 30, 40];
console.log(myArray[2]);

//follows BODMAS Operation while executing
const result = 100 + 50 / 2;

console.log(result);//125 

const result2 = 4**4;
console.log(result2);

const result3 = 8^2;

let startingNumber = 0;
startingNumber++;
startingNumber = startingNumber + 1;
startingNumber = startingNumber - 1;
startingNumber--; 

let x = 10; 
x = x+5;
// the above and the below opertion is same
x += 5;
x -=10
x *= 10;

const result1 = 20 > 18;
console.log(result1);

const result4 = 20 ===20;
console.log(result4);//true


const result5 = 20 === "20";// === compares value and datatype also
console.log(result5);//false

const result6 = 20 === "A String"; // === compares value and datatype also
console.log(result6);//false

const result7 = 20 == "20"; // == compares only values
console.log(result6);//true


const numberValue = 20;

const stringValue = "50";

const stringValue2 = "20";

typeof stringValue //"string"
typeof numberValue //"number"
typeof stringValue2; //"string"
Number(stringValue2); //20
stringValue == numberValue; //false
stringValue == stringValue2; //false
stringValue === numberValue; //false
stringValue === stringValue2; //false
numberValue === stringValue2; //false
numberValue == stringValue2; //true
Number(stringValue2) == numberValue; //true
Number(stringValue2) === numberValue;//true

const resultVariable4 = stringValue2 == numberValue;

console.log(resultVariable4);//true

const resultVariable2 = stringValue2 === numberValue;
console.log(resultVariable2);//false

const resultVariable6 = stringValue2 != numberValue;
console.log(resultVariable6); //false

const resultVariable7 = stringValue2 !== numberValue;
console.log(resultVariable7); //true

const myObj = {
    property1: "some value",
    property2: 20
  };

  const anotherObj = {
    property1: "some value",
    property2: 20
  };

  const resultcomp = myObj === anotherObj;
  console.log(resultcomp); //false

  const resultcomp2 = myObj == anotherObj;
  console.log(resultcomp2); //false

  const myArray3 = [1,2,3,4,5];
  const anotherArray = [1,2,3,4,5];

  const arrayComp = myArray3 == anotherArray;
  const arrayComp2 = myArray3 === anotherArray;

  console.log(arrayComp); //false 
  console.log(arrayComp2); //false

  // terenary operator acts as conditonal statements like if or if else

  const results = 20 === 20 ? "values match" : "values not match";
  console.log(results);//values match

  const results2 = 20 >= 19 ? "values match" : "values not match";
  console.log(results2); //values match

  const resultop = !(((40/20) === 2 && true) || ("yes" === "no"));
  console.log(resultop);// false

  const firstNumber1 = 20;
  const secondNumber1 = '20'; 

  const result0 = firstNumber1 === secondNumber1;
  console.log(result0);

  const expression1 = 100 % 50;
  console.log(expression1);//0
  const expression2 = 100 / 50;
  console.log(expression2);//2
  const expression3 = expression1 < expression2;
  console.log(expression3);//true
  const expression4 = (expression3 && (300+5 === 305));
  console.log(expression4);//true
  const expression5 = !expression4; 
  console.log(expression5);//false


//   We can access nested objects and arrays by mixing together
  const myobject = {
    prop1: 'first value',
    prop2: 20
  }

  const myArr = [40, 50, 2];

  const compResult = myobject.prop2 === (myArr[0]/myArr[2]); // true

  const myObj3 = {
    nestedObject1:{
        price:100,
        quantity:5
    },
    nestedObject2:{
        price:150,
        quantity:2
    }
  };

  const arr1 = [myObj3.nestedObject1, myObj3.nestedObject2];

  const result10 = (arr1[0].price * arr1[0].quantity)> (arr1[1].price * arr1[1].quantity);//true
