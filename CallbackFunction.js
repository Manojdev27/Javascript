function myCallback(someNumber){
    return someNumber * 2;
  }
  function main(randomNumber, shouldCall, callback){
    let result = randomNumber;

    if(shouldCall){
        result = callback(randomNumber);
    }
    return result;
  }

  main(10, false, myCallback);//10
  main(15, true, myCallback);//30

  // Writing a call back function

  //using anonymous function we can have the callback
  main(20 , true, function (num) {
    return num * 2;
    }) //40

 //using Arrow function we can have the callback
    main(20 , true, (num) => {
        return num * 2;
        }) //40 


main(20 , true, num =>  num * 2); //40 

const myArray = [2,4,6,8,10];

function myCustomMapOperationCallback(arrItems){
    return arrItems * 4;
}

const newArray = myArray.map(myCustomMapOperationCallback);

console.log(newArray); //Array(5) [ 8, 16, 24, 32, 40 ]

const myNewArray = myArray.map(n => n * 5);

console.log(myNewArray); //Array(5) [ 10, 20, 30, 40, 50 ]

const strArray = ["Hello", "World", "Template", "Callback", "Functions"];

strArray.map(arrItems => arrItems.split("").reverse().join(" ")); // Array(5) [ "o l l e H", "d l r o W", "e t a l p m e T", "k c a b l l a C", "s n o i t c n u F" ]



