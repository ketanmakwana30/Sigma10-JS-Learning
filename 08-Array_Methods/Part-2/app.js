// Default parameters

function sum(a, b = 2){
    return a + b;
}
// sum(7); //9


// function sum1(a = 2, b){     // Not valid statement
//     return a + b;
// }
// sum1(7);   //NaN



// Spread method --> ...(Three dot)

let minArr = [1, 2, 4, 5, 6, -7, 75];

console.log(Math.min(...minArr));    
console.log(Math.max (...minArr));


// Others Examples:

console.log(...minArr);
console.log(..."ApnaCollege");


// Spread with Array Literals 

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];

let chars = [..."Hello"];

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

[...odd, ...even];


// Spread with object literals

const data = {
    email: 'ketan01@gmail.com',
    password: "Abcd"
};

const datacopy = { 
    ...data, 
    id: 123 
};

arr = [1, 2, 3, 4, 5, 6, 7];    //value
let obj1 = { ...arr };          //obj -> key:value (index wise print - index of array)

let obj2 = { ...chars};         // (index of string )         