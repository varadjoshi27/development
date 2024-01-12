//operaators and conversion

//1.addition
console.log("7"+88);
console.log(88+'7');
//"+" opertor behaves different from rest of 4 because it is also concatenation operator so when it deals with string and number it gives precedence
// to string and converts number to string

//*,-,/
console.log('7'-8);//string got converted to number

console.log('7'*'7');
console.log(7*'7');//operation happened as number even when both of them were string

console.log('4'/2);
console.log('4'/'2');//operation happened as number even when both of them were string

//trying out these operators with non nummber strings
console.log('s'*'s');
console.log('s'-'s');
console.log('s'/'s');
//all will give Not a number

//nan,null, undefined and operators
console.log(6+null);
console.log('6'+null);//as one was string behaviour is string concatenation and null is not acting here

//null is almost same as 0
console.log(6*null);
console.log('6'*null);//  treated as number gives not a number
console.log(8*undefined);//will give not a number
console.log(5*NaN);




