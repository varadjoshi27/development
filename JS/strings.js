
let myName='Varad joshi'
//V a  r a d _ j o s h i
//0 1  2 3 4 5 6 7 8 9 10

//exxtraction methods do not make change in original array
//slice
    console.log("sliced string is-->"+myName.slice(0,4))
    //first index is inclusive and last index is exclusive this will print what is there on0 index and remove what is on 1 index, also no changes in original string
    // console.log("sliced string is-->"+myName.slice(0,5))
    // console.log("sliced string is-->"+myName.slice(2))//start from 2 and cut upto end
    // console.log("minus-->"+myName.slice(2,-2))//start from 2 and cut (-end) number of elements from back 
    // console.log("minus-->"+myName.slice(2,-10))//start from 2 and cut (-end) number of elements from back 
    // console.log(myName)

//substring
    //console.log(myName.substr(0,3))//first parameter ---start from this index, second parameter include this number of parameters starting from frst parameter's element
    //console.log(myName)
    let str='VARAD'
    console.log("full --"+str.toLowerCase())//no changes in original array
    console.log(str);

//concatination methods
    //concat adds 2 strings
    let Name='varad '
    let lastName='joshi '
    let fullName=Name+lastName
    console.log(fullName);
    let More=Name.concat(lastName,"this is my full name")
    console.log(More);

    //trim remove spaces
    var trimmed="   var        ad"
    console.log(trimmed.length);
    console.log(trimmed.trim().length);

//split
let sentence="hello   there I have started"
console.log(sentence.split(" "));    
    


