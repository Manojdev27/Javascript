const firstNumber = 20;
const secondNumber = 10;
const thirdNumber = 40;
const jsExpression = firstNumber > secondNumber;
const jsExpression2 = firstNumber > thirdNumber;

//only if statement (no "else" statement added)
if(jsExpression){
    console.log("this expression is true");// this expression is true
}

//basic if-else statement
if(jsExpression){
    console.log("this expression is true"); //this expression is true
}
else{
    console.log("this expression is false");
}

// An else if statement
if(jsExpression2){
    console.log("this expression is true");
}
else if (firstNumber > 0){
    console.log("this expression is false and the first number is greater than 0"); //this expression is false and the first number is greater than 0
}
else{
    console.log("this expression is false");
}

const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];
const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

    if(randomColor == 'orange'){
        console.log('the color is orange');
    }else if(randomColor == 'green'){
        console.log('the color is green');
    }else if(randomColor == 'yellow'){
        console.log('the color is yellow');
    }else if(randomColor == 'purple'){
        console.log('the color is purple');
    }else if(randomColor == 'blue'){
        console.log('the color is blue');
    }else{
        console.log('No color found');
    }


    //the above code is written in switch statement below

    const colors1 = ['orange', 'green', 'yellow', 'purple', 'blue'];
const randomIndex1 = Math.floor(Math.random() * colors1.length);

const randomColor1 = colors1[randomIndex1];

    switch(randomColor1){
        case 'orange':
            console.log('the color is orange');
            break;
        case 'green':
            console.log('the color is green');
            break;
        case 'yellow':
            console.log('the color is yellow');
            break;
        case 'purple':
            console.log('the color is purple');
            break;
        case 'blue':
            console.log('the color is blue');
            break;
        default:
            console.log('No color found');
    
    }
    
