// setTimeout function

console.log("Hello Everyone!");

setTimeout ( () => {
    console.log("Apna College");  
}, 2000);
console.log("Welcome to ");


// setInterval function

// let id = setInterval( () => {
//     console.log("Apna College");  
// }, 2000);

// console.log(id);
// clearInterval(id);                      // Stop 

// let id1 = setInterval( () => {
//     console.log("Sigma college");  
// }, 4000);

// console.log(id1);



// This with arrow function

const a = 12;                   // Global scope

const student = {
    name: "Ketan",
    age: 19,
    marks: 84,
    prop: this,                 // Global scope

    getName: function (){
        console.log(this);      // Calling object
        return this.name;
    },

    getMarks: () => {
        console.log(this);      //Perent's scope --> window object
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this.age);  // student
        }, 1000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this);  // window
        }, 1000);
    }

};




// Practice Question set 

// Q-1. Arrow Function by print square of number  "n"

const square = (n) => (n*n); 
// const square = n => n*n;      //Single parameter so not use parentheses () 

console.log(square(7));


//Q-2. Print Hello world with setInterval 5 time --> each 2 second

 let id5 = setInterval(() => {
        console.log("Hello World");
    }, 2000);

    setTimeout(() => {
        clearInterval(id5);
        console.log("Run ClearInterval");
        
    }, 10000);