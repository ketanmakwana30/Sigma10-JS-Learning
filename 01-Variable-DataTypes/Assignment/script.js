//Q-1. Divisible by 10 "Good " and "Bad" 

let num = 450;

if (num % 10 == 0) {
    console.log("Good");
}else{
    console.log("Bad");
    
}

//Q-2. Take name and age using prompt & alert 

// let fullName = prompt("Enter your name: ");
// let age = prompt("Enter your age:");

// let statement = fullName + " is " + age + " year old."; 

// alert(`${fullName} is ${age} year old.`);


//Q-3. switch statement and print month quarter

let quarter = 4;

switch (quarter) {
    case 1:
        console.log("January, Februaray, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Enter valid Number!");
        break;
}

//Q-4. golden string --> 'a' or 'A' , length >5

let str = "Apples";

if ((str[0] == 'a' || str[0] == 'A') && str.length > 5) {
    console.log("golden string");
}else{
    console.log("Not a golden string");
}

//Q-5. Largest of 3 number

let a = 10;
let b = 30;
let c = 18;

if (a > b) {
    if (a > c) {
        console.log(a,"is largest");
    }else{
        console.log(c,"is largest");
    }
}else{
    if (b > c) {
        console.log(b,"is largest");
    }else{
    console.log(c,"is largest");
    }
}


//Q-6. Check if 2 number have the same last digits.

let num1 = 578;
let num2 = 238; 


if( ( num1 % 10 ) == ( num2 % 10 ) ){
    console.log("Same digits",num1 % 10);
}else{
    console.log("Not same digits");
}