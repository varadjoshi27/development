//1) node wcat.js filepath==> display contents of file in terminal
//2) node wcat.js file1path file2path file3path==>display contents of all files
//3) node wcat.js -n file1path file2path OR node wcat.js -n file1path give numbering to all non empty lines
const { log, table } = require("console");
const fs=require("fs");
let inputArr = process.argv.slice(2);
//console.log(inputArr);
//----->Approach1(1 step)
//iterate through array of input arguments and pickupfile names
// for(let k=0;k<inputArr.length;k++)
// {
//     let filename=inputArr[k];
//     let data=fs.readFileSync(filename,"utf8");
//     console.log(filename+"-->"+data);
// }

//----->Approach2(multiple steps)
//1.get all files paths in one array
let filesArr=[];
let options=[];
for(let i=0;i<inputArr.length;i++)
{
    if(inputArr[i].charAt(0)=='-')
    {
        options.push(inputArr[i]);
    }
    else{
    filesArr.push(inputArr[i]);
    }
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
//Split on the basis of new line
let content="";
for(let i=0;i<filesArr.length;i++)
{
    let fileContent=fs.readFileSync(filesArr[i]);
    content=content+fileContent+"\r\n";
}


let SplitContent=content.split("\r\n");


//****S*****leave only 1 line
//-s check on every element that khud and upar wala is not empty line
//!--let bcontent=SplitContent was wrong it was only creating another reference of original array
//!-- let b = s.slice();,let b = [...s];,let b = Array.from(s); Either of them could be used
function modifyByS(SplitContent)
{
let Scontent=[...SplitContent]
let Spresent=options.includes("-s")
if(Spresent)
{
    for(let i=1;i<content.length;i++)
    {
        if((Scontent[i]==""&&Scontent[i-1]=="")||(Scontent[i]==""&&Scontent[i-1]==null))
        {
            Scontent[i]=null
        }
    }
}

let tempSContent=[]
for(let i=0;i<Scontent.length;i++)
{
    if(Scontent[i]!=null)
    {
        tempSContent.push(Scontent[i])
    }
}
console.log("Scontent");
console.table(tempSContent);

}

//Call S function if it is there it need no condition
if(options.includes("-s"))
{
    modifyByS(SplitContent)
}

//*-b number only non empty line
function modifyByB(SplitContent)
{
let Bcontent=[...SplitContent]
let Bpresent=options.includes("-b")
let count=1;
if(Bpresent)
{
for(let i = 0;i<Bcontent.length;i++)
{
    if(Bcontent[i]!="")
    {
        Bcontent[i]=count+") "+Bcontent[i]
    count++;
    }
}
}
console.log("Bcontent");
console.table(Bcontent);
}

//*"-n"number all lines
function modifyByN(SplitContent)
{
    for(let i=0;i<SplitContent.length;i++)
    {
        SplitContent[i]=i+1+") "+SplitContent[i];
    }
    console.log("Ncontent");
    console.table(SplitContent)
}

//Call functions conditionally so that only first one out of n&s is executes because they are mutually exclusive
let finalOption=""
//!let indexofN=options.indexOf("-n")  returns index if found else returns -1
let indexofN=options.indexOf("-n")
let indexofB=options.indexOf("-b")
if(indexofB!=-1&&indexofN!=-1)
{
    if(indexofB<indexofN)
    {
        finalOption="-b"
    }
    else
    {
        finalOption="-n"
    }
}
else{
    if(indexofB!=-1)
    {
        finalOption="-b"
    }
    else if(indexofN!=-1)
    {
        finalOption="-n"
    }
}
if(finalOption=="-n")
{
    modifyByN(SplitContent);
}
else if(finalOption=="-b")
{
    modifyByB(SplitContent);
}