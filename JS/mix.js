// "==" operator does not check type of data oly value
let a=10;
if(a==10)
{
    console.log("a has 10");
}
a='10';
if(a==10)
{
    console.log("a has 10");
}

//"===" operator
let b=10;
if(b==10)
{
    console.log("b has 10");
}
b="10";
if(b===10)
{
    console.log("b has 10");
}
else{
    console.log("b is string type");
}

//splice makes change in original array also can replace something in array as third argument
let arr=['jan','feb','mar','apr','may']
console.log(arr);
arr.splice(1,2,'dec')//second parameter defines number of elements to be removed
console.log(arr);