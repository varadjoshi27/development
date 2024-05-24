//file system module
const fs = require("fs");
let nf=fs.appendFileSync("f1.txt","i am f1 file");//creates new file if it does not exist else jus appends data to existing file
console.log(nf);

// let data = fs.readFileSync("f1.txt");
// console.log(data+"");//will get data of file in computer friendly friendly buffer format adding "" to it will convert it in english
let data = fs.readFileSync("f1.txt","utf8")//this will convert it in english
console.log(data);