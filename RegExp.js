const emailValidatorRegex = new RegExp('^.+@.+\..+$');
const userName = 'invalidemail@gmail.com';
const isValid = emailValidatorRegex.test(userName); 
console.log(isValid);//true
const isNotValid = 'invalidemail@';
const validOrNot = emailValidatorRegex.test(isNotValid);
console.log(validOrNot); //false

const regex = new RegExp('g'); 
const string1 = 'my favorite food is steak';
const string2 = 'my favourite thing to do is code'; 
regex.test(string1);
regex.test(string2); 
const regex4 = new RegExp(/[A-Za-z0-9]/);
regex4.test(string1);//true
regex4.test(string2); //true
// \d is a equivalent to [0-9]
/\d/.test(string1);//false
// \s which will match any whitespace characters.
/\s/.test(string1);
// \w which will match all alphanumeric characters
/\w/.test(string1);

// ^ which will match the begining letter of the string
/^m/.test(string1);//true

// $ which will match the end letter of the string
/k$/.test(string1);//true

// | which will used to either "code" or "Steak is present in the string which returns true"
/code | steak/.test(string1)

/[a-z ]{2,6}/.exec(String1); //Array [ "my fav" ]

const str = 'hello world, 2021 @ more of a string'; 

/[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(str); //Array [ "hello world, 2021 @ more of a string" ]


// the simple way to get the same output using a period '.' and '+'
/.+/.exec(str); //Array [ "hello world, 2021 @ more of a string" ]





