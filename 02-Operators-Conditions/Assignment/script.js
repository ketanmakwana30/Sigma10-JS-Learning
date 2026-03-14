// Q-1. First n Element in the Array


// let arr = [2,4,5,6,7];
// let n = 3;

// let ans = arr.slice(0,n);   



// Q-2. Last n Element in the Array

// let arr = [2,4,5,6,7];
// let n = 2;

// let ans = arr.slice(arr.length-n);



// Q-3. check whether a string

// let whether = prompt("Enter the string");
// if (whether.length == 0) {
//     console.log("String is Empty");
// }else{
//     console.log("String is not Empty");
// }


// Q-4. Given character is lower case

// let str = "ApnaCoLLeGe";
// let idx = 3;

// if (str[idx] == str[idx].toLowerCase()) {
//     console.log("Character is lower case");
// }else{
//     console.log("Character is not lower case");
// }


// Q-5. strip leading and trailing spaces from a string.

// let str = prompt("Please Enter a string");
// console.log(`Original string = ${str}`);
// console.log(`string without space = ${str.trim()}`);



// Q-6. check if an element exists in an array or not.

let arr =["Hello", 'a', 23, 43, 33];
let item = 44;

if (arr.indexOf(item) != -1) {
    console.log("Element Exists in array");
}else{
    console.log("Element not Exists in array");

}