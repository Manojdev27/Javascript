const now = new Date();
console.log(now);//Date Tue Feb 20 2024 16:42:07 GMT+0530 (India Standard Time)

const myDate = new Date();
console.log(myDate);// Date Tue Feb 20 2024 16:47:14 GMT+0530 (India Standard Time)
myDate.toString();//"Tue Feb 20 2024 16:47:14 GMT+0530 (India Standard Time)"
console.log(myDate); //Date Tue Feb 20 2024 16:47:14 GMT+0530 (India Standard Time)
myDate.toISOString(); //"2024-02-20T11:17:14.462Z"
myDate.getMonth();// 1
myDate.getFullYear();//2024