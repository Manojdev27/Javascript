//replaceAll Method

const string1 = 'My Dog jumped on the bed. My Dog is a bad dog';
string1.replaceAll('Dog', 'cat');//"My cat jumped on the bed. My cat is a bad dog" 

console.log(string1);//"My Dog jumped on the bed. My Dog is a bad dog"

const newVariable = string1.replaceAll('Dog', 'cat'); 
console.log(newVariable);//"My cat jumped on the bed. My cat is a bad dog"

const correctStr1 = string1.replaceAll(/[Dd]{1}og/g, 'cat');
console.log(correctStr1);//My cat jumped on the bed. My cat is a bad cat

// toUppercase Methood

const myString = 'some String';
const uppercaseString = myString.toUpperCase();
console.log(uppercaseString); //SOME STRING

uppercaseString.substring(5,7);//"ST" 

//substr() is deprecated we can only use substring() method
uppercaseString.substr(5,7);//"STRING"


// trim() Method - trim the whitespaces in a string
const externalData = [ 
    {
    title: 'How to Code  ',
    author: ' Zach '
},

{
    title: '  What is Vim?  ',
    author: ' Zach '
},

{
    title: '  How do Javascripts loops work    ',
    author: ' Zach '
},

];

for(let i = 0; i < externalData.length; i++){
    const currentTitle = externalData[i].title;
    const currentAuthor = externalData[i].author;
  
  externalData[i].title = currentTitle.trim();
  externalData[i].author = currentAuthor.trim();
  }

  console.log(externalData);

//   o/p Array(3) [ {…}, {…}, {…} ]
// ​
// 0: Object { title: "How to Code", author: "Zach" }
// ​​
// author: "Zach"
// ​​
// title: "How to Code"
// ​​
// <prototype>: Object { … }
// ​
// 1: Object { title: "What is Vim?", author: "Zach" }
// ​​
// author: "Zach"
// ​​
// title: "What is Vim?"
// ​​
// <prototype>: Object { … }
// ​
// 2: Object { title: "How do Javascripts loops work", author: "Zach" }
// ​​
// author: "Zach"
// ​​
// title: "How do Javascripts loops work"
// ​​

const regex = /[a-z]+/;

const str = "gyhuhuujiugyhufy12845485AJHJHSJNJH";

regex.exec(str); //Array [ "gyhuhuujiugyhufy" ]

str.match(regex); //Array [ "gyhuhuujiugyhufy" ]

const regex2 = /[a-z]+/g;

str.matchAll(regex2); 





