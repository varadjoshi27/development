//Var
var a=0;
var b='J';
var c="Varad";
var d=null;

//Let
let l="let outside block";
// this is allowed even if we change type-----> l=9

//const 
const Author="const variable---> Varad";
console.log(Author);


//block using a var changer var for entire code
console.log(a);
{
    var a='k';
    console.log(a);
}
console.log(a);
//block using let both let are independent!!
{
    let l='let inside block';
    console.log(l);
}
console.log(l);

//-------------
//problem with var and let
//var is not block scoped/function scoped
//let is block scoped
console.log("scope of var and let")
for(var i=0;i<10;i++)
{
    console.log(i);
}
console.log("var i is still usable after loop ends --->"+ i);
for(let lettt=0;lettt<10;lettt++)
{
    console.log(lettt);
}
//console.log("let l is not usable after loop neds --->"+ lettt);
