let arr=[1,2,3,'one','two','three']
console.log(arr)

//accessing element of array
console.log(arr[4])

//replcing element of array
arr[4]=2
console.log(arr[4])

//add further elements
arr[6]='new'
console.log(arr[6])

//methods of array
//1.pop removes last element of an array
    //arr.pop();
//2.push adds element at last index
    //arr.push('pushed elemen')
//3.unshift adds element at the 0 index
    // arr.unshift('unshifted element')
    // console.log(arr)    
    // arr.unshift('unshifted element2')
    // console.log(arr) 
//4.shift removes element from 0 index of array
    // arr.shift()
    // console.log(arr)    
    // arr.shift()
    // console.log(arr) 
//5. length return length
    console.log(arr.length)

//2D Array
let matrix=[[1,2,3],[4,5,6]]
console.log(matrix) 
console.table(matrix)  
console.log(matrix[1][2]) 