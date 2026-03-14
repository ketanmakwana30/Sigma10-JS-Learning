//  this as calling object

const student = {
    name: "ketan",
    age: 19,
    math: 91,
    eco: 89,
    guj: 79,
    getAvg(){
        let avg = (this.math + this.eco + this.guj) / 3;
        console.log(avg);
        
    }
}



// Try & catch statement

console.log("hello!");
// let a = 10;
try{
    console.log(a);
} catch(err) {
    // console.log("Error: a is not defined");
    // console.log(err);
}
// console.log("hello!");



// Arrow function

const sum = (a, b) => {
    return a+b;
};
// console.log(sum(5,7));


//Cube with arrow function
const cube = (a) => {
    return a*a*a;
}

//Power with arrow function
const pow = (a, b) => {
    return a**b;
}

// Implicit return 
const mul = (a, b) => (a*b);