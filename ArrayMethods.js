//push(), pop(),shift(), unshift()

const arr = [1,2,3,4,5,6];

// push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array. 
//pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array. 
// shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

arr.pop(); //6
arr.pop(); //5
arr.push(5,6,7);//7
console.log(arr);//Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
arr.unshift(0);//8
console.log(arr); //Array(8) [ 0, 1, 2, 3, 4, 5, 6, 7 ]
arr.shift();//0
console.log(arr); //Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
arr.shift();//1
console.log(arr);//Array(6) [ 2, 3, 4, 5, 6, 7 ]
arr.unshift(0);//7
console.log(arr); //Array(7) [ 0, 2, 3, 4, 5, 6, 7 ]
arr.unshift(1);//8
console.log(arr); //Array(8) [ 1, 0, 2, 3, 4, 5, 6, 7 ]

//slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 

const copyArr = arr.slice();
console.log(copyArr);//Array(8) [ 1, 0, 2, 3, 4, 5, 6, 7 ]
console.log(copyArr === arr);//false
const anotherCopy = arr.slice(3);
console.log(anotherCopy);//Array(5) [ 3, 4, 5, 6, 7 ]

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

const array = [1,2,3,"oops", 4,5,6]; 
array.splice(3,1, 3.5); //Array [ "oops" ]
console.log(array);//Array(7) [ 1, 2, 3, 3.5, 4, 5, 6 ]
array.splice(0,0, 0);//Array []
console.log(array);//Array(8) [ 0, 1, 2, 3, 3.5, 4, 5, 6 ]

//indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
array.indexOf(3.5); //4
array[array.indexOf(3.5)];//3.5 
console.log(array.indexOf(7));//-1

// findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const moreComplexArrr = [
    {
    firstName: "Bob",
    secondName: "Smith"
},
{
    firstName: "Alice",
    secondName: "Smith"
},

{
    firstName: "Jon",
    secondName: "Smith"
},

{
    firstName: "Jon",
    secondName: "Doe"
},
];

moreComplexArrr.findIndex((arrItem) => {  
    return arrItem.secondName !== "Smith";
    }) //3

// map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. 

    const blogPostsFromDatabase = [ 
        {
        title: 'How to use the map() function',
        category: 'uncategorized'
    },

    {
        title: 'What is Javascript',
        category: 'uncategorized'
    },

    {
        title: 'Why are crazy enough to learn to code?',
        category: 'uncategorized'
    },

    ];

    blogPostsFromDatabase.map(arrItem => {
        arrItem.category = 'Web Development';
        return arrItem;
        
        });

//         O/P
//         Array(3) [ {…}, {…}, {…} ]

// 0: Object { title: "How to use the map() function", category: "Web Development" }
// ​
// 1: Object { title: "What is Javascript", category: "Web Development" }
// ​
// 2: Object { title: "Why are crazy enough to learn to code?", category: "Web Development" }
// ​
// length: 3

//  forEach() method of Array instances executes a provided function once for each array element. 

const arr2 =[1,2,3];

arr2.forEach(arrItem => {
    console.log(arrItem);
});
// Output:
// 1
// 2
// 3

arr2.forEach((arrItem, index) => {
    console.log(arrItem);
    console.log(index);
});

// Output:
// 1
// 0
// 2
// 1
// 3
// 2

// includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate. 

const myColors = ['blue', 'red', 'purple', 'green', 'orange'];

myColors.forEach(color => {
    if(color === 'orange'){
        orangeExist = true;
    }
});

console.log(orangeExist); // true

myColors.includes('orange'); //true
myColors.indexOf('orange');//true
myColors.indexOf('orange') !== -1;// true

// filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const allOrders = [ 
    {
    productName: 'Tea Pot',
    isDigital: false,
    isCancelled: false,
    isOpen:false
},
{
    productName: 'Blue Gilden Mens Hoodie',
    isDigital: false,
    isCancelled: true,
    isOpen:false
},
{
    productName: 'Code Complete Kindle Book',
    isDigital: true,
    isCancelled: true,
    isOpen:false
},
{
    productName: 'Atomic Habits Kindle Book',
    isDigital: true,
    isCancelled: false,
    isOpen:false
}];

const digitalOrders = allOrders.filter(arrItems => {
    return arrItems.isDigital;
    });
    //Array [ {…}, {…} ]
    ​
    // 0: Object { productName: "Code Complete Kindle Book", isDigital: true, isCancelled: true, … }
    // ​
    // 1: Object { productName: "Atomic Habits Kindle Book", isDigital: true, isCancelled: false, … }
    // ​
    // length: 2

    const digitalOrders2 = allOrders.filter(arrItems => {
        return arrItems.isDigital && arrItems.isCancelled;
        });
        //Array [ {…} ]
// ​
// 0: Object { productName: "Code Complete Kindle Book", isDigital: true, isCancelled: true, … }
// ​
// length: 1

// reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const array2 = [10,20,30,25,14];

function reducerCallback(sum, arrItem){
    return sum += arrItem;
}

const result = array2.reduce(reducerCallback, 0);// setting sum as 0 and call the callback function.

array2.reduce((sum,arrItem) => sum += arrItem, 0)/array2.length; //19.8

