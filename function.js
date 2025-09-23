// function myFunction(msg,n) {
//     console.log(msg*n);
// }
// myFunction("hello",100);


// function sum(x,y) {
//     console.log(x+y);
// }
// sum(3,2);




// function sum(x,y) {
//     s=x+y;
//     return s;
// }
// let val=sum(2,3);
// console.log(val);


// Arrow function
// const arrowsum = (a,b) => {
//     console.log(a+b);
// };


// const arrowmul = (a,b) => {
//     return a*b;
// };



// function countvowels(str) {
//     let count = 0;
//     for(const char of str) {
//         if(char == "a" ||
//             char == "e" ||
//             char == "i" ||
//             char == "o" ||
//             char == "u" )
//             {
//                 count++;
//             }
//     }
//     console.log(count);
// }


// let arr = [1,2,3,4,5];    
// arr.forEach((val)=>{    
//     console.log(val);
// });



let nums =[2,3,45,];
let calcsquare = (num) => {
    console.log(num*num);
};
nums.forEach(calcsquare);