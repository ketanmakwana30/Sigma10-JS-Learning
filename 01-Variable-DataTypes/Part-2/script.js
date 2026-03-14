//if statement

// let age = 19;
// if (age >= 18) {
//     console.log("You can Vote");   
// }

// let firstName = "Ketan";
// if (firstName == "Ketan") {
//     console.log(`Welcome ${firstName}`);
    
// }




//Traffic Light System

// let color = "green";

// if (color == "red") {
//     console.log("Stop");
// }
// if (color == "green"){
//     console.log("Go");
// }
// if (color == "yellow") {
//     console.log("Slow Down");
    
// }





//else if statement

// let marks = 23;
// if (marks >= 90) {
//     console.log("Grade: A");
// }else if (marks >= 80) {
//     console.log("Grade: B");
// }else if (marks >= 70) {
//     console.log("Grade: C");
// }else if (marks >= 50) {
//     console.log("Grade: D");
// }else if (marks >= 33) {
//     console.log("Grade: E");
// }else if(marks <33){
//     console.log("You age Fail");   
// }





//else statement

// let month = "july";

// if (month === "january") {
//     console.log("Winter");
// }
// else if (month === "july") {
//     console.log("Summer");
// }
// else {
//     console.log("monsoon");
// } 




//Practice Question set -1

// let size = "S";

// if (size === "XL") {
//     console.log("Price is Rs.250");
// }
// else if (size === "L") {
//     console.log("Price is Rs.200");
// }
// else if (size === "M") {
//     console.log("Price is Rs.100");
// }
// else {
//     console.log("Price is Rs.50");
// }



// nested if else

// let marks = 56;
// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("Grade: O");
//     }else{
//         console.log("Grade: A");
//     }
// }else{
//     console.log("Better luck next time !");
// }



// && (AND) Operators

// let marks = 80;
// if (marks >=33 && marks >=80) {
//     console.log("Pass");
//     console.log("Grade: A+");   
// }


// || (OR) Operators

// let marks = 70;
// if (marks >=33 || marks >=80) {
//     console.log("Pass");
//     console.log("Grade: A");
// }


// ! (NOT) Operators

// let marks = 89;
// if (!(marks <= 33) ) {
//     console.log("Pass");
//     console.log("Grade: A");
// }

// if (marks > 33 && marks >=70 || !(false)){
//     console.log("Pass");    
// }




//Practice Question set-2 

// let str =  "ages";

// if ( (str[0]=== 'a') && (str.length>3) ) {
//     console.log("Good string");   
// }else{
//     console.log("Not a good string");
    
// }


// Switch Statement

//  let color = "green";

//  switch (color) {
//     case "red":
//         console.log("Stop !");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken light");
//  }


//Practice Question set-3

let day = 3;


switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day!");
        
}


// alert("Something is wrong!");

// console.log("This is simple log");
// console.error("This is Error message");
// console.warn("This is worning message");

// prompt("Enter your full name:");

 
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
// console.log("Welcome",firstName,lastName,"!");

let msg = "Welcome "+ firstName + " " + lastName + " !";
alert(msg); 
