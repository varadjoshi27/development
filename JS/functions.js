// //default function
// // function add(a,b)
// // {
// //     return  a+b;
// // }
// // let ans=add(2,6);
// // console.log(ans);

// //functions are treated as first class citizns in JAVASCRIPT
// //-->function can be returned
// //-->function can be passed as arguments/parameters
// function calculator(str,a,b)
// {
//     function add()
//     {
//         return a+b;
//     }
//     if(str=='add')
//     {
//         return add;
//     }
// }
// let returnedFunction=calculator('add',2,3);
// console.log("returned function is \n"+returnedFunction);
// console.log("Here is calc: "+calculator('add',7,8));

// //functional expression
// let a=function abcd()
// {
//     console.log("hello I am a function expression")
// }
// a()//here we are envokinng function
// console.log("here"+a)//here we are printing function expression containing function defenition
// //abcd()//Error saiyng abcd is not defined abcd is no longer there

// //IIFE
// function product2(a,b){
//  console.log("IIFE for a function---"+(a*b))
// }(89,99)
let IIFE=function product(a,b){
    console.log("IIFE for a function expression---")
    console.log(a*b)
}(3,3)
//console.log("random string--> "+IIFE)








