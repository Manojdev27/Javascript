try{
    var num = 20;
    num.toUpperCase();
}
catch(error){
    console.log(error instanceof TypeError);
    console.log(error.message)
}

var num = null;

if(num){
    console.log('this will not be reached');

}else{
    console.log('this will be reached');
} //this will be reached