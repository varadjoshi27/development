//1) node wcat.js filepath==> display contents of file in terminal
//2) node wcat.js file1path file2path file3path==>display contents of all files
const fs=require("fs");
let inputArr = process.argv.slice(2);
//console.log(inputArr);
//----->Approach1(1 step)
//iterate through array of input arguments and pickupfile names
for(let k=0;k<inputArr.length;k++)
{
    let filename=inputArr[k];
    let data=fs.readFileSync(filename,"utf8");
    console.log(filename+"-->"+data);
}

//----->Approach2(multiple steps)
//1.get all files paths in one array
let filesArr=[];
for(let i=0;i<inputArr.length;i++)
{
    filesArr.push(inputArr[i]);
}
//2.check if files exist or not
for(let i=0;i<filesArr.length;i++)
{
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist)
    {
        console.log("file does not exist");
        return;
    }
}
//3.we will read contents of each file and store it in one variable keep appending content of each file
let content="";
for(let i=0;i<filesArr.length;i++)
{
    let fileContent=fs.readFileSync(filesArr[i]);
    content+=fileContent+'\n';
}
console.log(content);