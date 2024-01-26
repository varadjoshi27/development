let person={
    //key : value
    name: "Varad",
    age: 24,
    city: "Dhar",
    height:  5.11
}
// console.log(person.name);
// console.log(person.age);
// console.log(person["name"]);
// console.log(person['city']);
let City=person.city;
console.log(City);
console.log(typeof(City));


let captianAmerica={
    name: 'steve',
    age: 250,
    friends: ['tony','bruce','bucky'],
    address:{
        city: "new york",
        street:'108',
        country:'USA'
    },
    sayIt:function () {
        console.log(`${this.name} will always correct your language`);
    }

 };
console.log(captianAmerica);
console.log(captianAmerica.friends);
console.log(captianAmerica.friends[2]);
console.log(captianAmerica.sayIt);
captianAmerica.sayIt();//method of object accessing
console.log(captianAmerica.address.city);//accesing property of nested object

// console.log("---------\n");
// //for loop in jS
// //"in" keyword is used to get keys from that object
for(let haathi in captianAmerica )
{
    console.log(haathi);
    //haathi vriable k adar meri keys padi hui hai but "."ka use krenge toh toh actual haathi naam ki key dhundhega object me
    //toh agar haathi use krna hai toh []use krna padega
    //variable k andar binded value se object ki properties access krna hai agar
    //console.log(captianAmerica.haathi);
    console.log(`${captianAmerica[haathi]}`);
}

// console.log("--------\n");
// //objects and arrays
// //arrays are also objects only but since the keys/index are numbers we can only use arr[ ] too access elements
// //which is true for any object
// let numObject={
//     1:'one'
// }
// console.log(numObject[1]);
// //console.log(numObject.1);
// console.log(numObject);




















