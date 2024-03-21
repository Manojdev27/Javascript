// List Filtering -  create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(callBack);
  }
  
  function callBack (arrItem) {
    return arrItem >= 0 && typeof arrItem === 'number';
  }

  filter_list([1,2,'a','b']); //Array [ 1, 2 ]
  filter_list([1,2,0,'a','b','some','string']); //Array(3) [ 1, 2, 0 ]

  // another Method
  function filter_list(l) {
    return l.filter(arrItem => arrItem >= 0 && typeof arrItem === 'number');
  }

  filter_list1([1,2,0,'a','b','some','string',89,78,45]); //Array(6) [ 1, 2, 0, 89, 78, 45 ]

  //Array.diff - implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.

  function arrayDiff(a, b) {
  
    if(a.length === 0){
      return[];
    }
     if(b.length === 0){
      return a;
    }
    let newA = a;
    let newB = b;
    
    a.forEach((arrItem, arrIndex) => {
      const aCopy = newA.slice();
      const bCopy = newB.slice();
      
      if(b.includes(arrItem)){
        
        newA = aCopy.filter(item => item !== arrItem);
        newB = bCopy.filter(item => item !== arrItem);
      }
    });
    
    console.log(newA);
    
    return newA;
  }

  arrayDiff([1,2,2,3,4,4,5], [2,3,4,4,5,6,7]);//Array [ 1 ]

  //Another Method

  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

  array_diff([1,2,2,3,4,4,5], [2,3,4,4,5,6,7]);// Array [ 1 ]


//Take a Ten Minutes Walk -

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

  
  function isValidWalk(walk) {
    if(walk.length !== 10){
      return false;
    }
    
    let nOffset =0;
    let sOffset =0;
    let wOffset =0;
    let eOffset =0;
  
    walk.forEach(direction => {
                 switch(direction){
                     case 'n':
                     nOffset += 1;
                     break;
                     case 's':
                     sOffset += 1;
                     break;
                     case 'e':
                     eOffset += 1;
                     break;
                     case 'w':
                     wOffset += 1;
          
                 }
                 });
    return nOffset - sOffset === 0 && eOffset - wOffset === 0;
  }

//Persistent Bugger - persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  function persistence(num) {
    if(num < 10){
      return 0;
    }
  
    const strVersion = num.toString();
    const arrVersion = strVersion.split("");
    const multiplicatonValue = arrVersion.reduce((acc,num) => acc *= num);
     
    if(multiplicatonValue >= 10){
      return 1+persistence(multiplicatonValue);
    }else
      {
        return 1;
      }
  
     
  }

  persistence(27);//2
  persistence(299);//3

  // Regex validate PIN code - ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

    function validatePIN (pin) {      
    return /^\d{4}$|^\d{6}$/.test(pin);
    }

    validatePIN("12345")//false
    validatePIN("123456")//true

// Regex count lowercase letters -Your task is simply to count the total number of lowercase letters in a string.

    function lowercaseCount(str){
        const result = str.match(/[a-z]/g);
         
       
         return result ? result.length : 0;
       }

       lowercaseCount('dafgf78980080%%^^&*yijiASDWW'); //9

       //Is the date today

       function isToday(date) {
        const checkDay = date.getDate();
        const checkMonth = date.getMonth();
        const checkYear = date.getFullYear();
        
        const today = new Date();
        
        const checkTodayDay = today.getDate();
        const checkTodayMonth = today.getMonth();
        const checkTodayYear = today.getFullYear();
        
        return checkDay === checkTodayDay && checkMonth === checkTodayMonth && checkYear ==checkTodayYear;
      }

    //   Alternate capitalization - capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
    function capitalize(s){
        const arr1 = s.split("");
         const arr2 = s.split("");
         
         arr1.forEach((item, index,original) =>{
           if(index %2 === 0){
             original[index] = item.toUpperCase();
           }
         });
         
         arr2.forEach((item, index,original) =>{
           if(index %2 !== 0){
             original[index] = item.toUpperCase();
           }
         });
         
         const arrstr1 = arr1.join("");
         const arrstr2 = arr2.join("");
       
         return [arrstr1, arrstr2];
       };

       capitalize("javascript") //Array [ "JaVaScRiPt", "jAvAsCrIpT" ]

       //Format a string of names like 'Bart, Lisa & Maggie'.

    //    Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
    function list(names){
        let finalString = "";
        
        if(names.length === 1){
          return names[0].name;
        }
        names.forEach((arrItem, arrIndex) => {
          const name = arrItem.name;
          
          if(arrIndex === names.length - 1){
          finalString = finalString + ' & ' +name;
        }
        else if(arrIndex === names.length - 2){
           finalString = finalString + name;
        }
          else{
            finalString = finalString + name + ', ';
          }
         });            
            console.log(finalString);
        
        return finalString;
      }

      list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]) 
      //Bart, Lisa, Maggie, Homer & Marge
      list([{name: 'Bart'},{name: 'Lisa'}]);
      //Bart & Lisa

//Form The Largest -Given a number , Return _The Maximum number _ could be formed from the digits of the number given 
      function maxNumber(n){
        return +n.toString().split("").sort((first,second) => second - first).join("");
      }

      maxNumber(980909); // 999800