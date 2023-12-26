//default function
function add(a,b)
{
    return  a+b;
}

let ans=add(2,6);
console.log(ans);




//functions are treated as first class citizns in JAVASCRIPT
//-->function can be returned
//-->function can be passed as arguments/parameters
function calculator(str,a,b)
{
    if(str=='add')
    {
        return function add()
        {
            return a+b;
        }
    }

}
let returnedFunction=calculator('add',2,3);
console.log("returned function is \n"+returnedFunction);
console.log(returnedFunction());

//functional expression
let sayHi=function abcd()
{
    console.log("hello I am a function expression")
}
sayHi()//here we are envokinng function
console.log("here we are printing function expression and not envoking the function\n"+sayHi)//here we are printing function expression containing function defenition
//abcd()//Error sayng abcd is not defined