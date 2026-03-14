// Math Methods

Math.abs(-32.99);           // Absolute value --> Positive value            // 32
Math.pow(4,5);              // Power                                        // 1024      
Math.floor(5.5);            // Num <= round off value  (Fursh)              // 5        // IMP (Nearest, Smallest int value)
Math.floor(-5.1);                                                           // -6
Math.ceil(5.7);             // Ceiling  (roof)                              //6
Math.ceil(-5.1);                                                            // -5       // IMP (Distant, Largest int value)

console.log(Math.floor(-5.5));



//Generate 1 to 10 random number

let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;

// let num = Math.floor( Math.random() * 10)+ 1;

console.log(num);



// Random number between 1 to 100.

// let hundred = Math.random();
// hundred = hundred * 100;
// hundred = Math.floor(hundred);
// hundred = hundred + 1;

let hundred = Math.floor( Math.random() * 100)+ 1;

console.log(hundred);



// Random number between 1 to 5.

// let five = Math.random();
// five = five * 5;
// five = Math.floor(five);
// five = five + 1;

let five = Math.floor( Math.random() * 5)+ 1;

console.log(five);



// Random 21 to 25 

let tFive = Math.floor( Math.random() * 5)+ 21;
console.log(tFive);



// Guessing game 

const max = prompt("Enter the MAX Number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("Congrats !, You are right,Random number is",random);
        break;
    }else if(guess < random){
        guess = prompt("Hint: Yor guess was too small, please try again.");
    }else{
       guess = prompt("Hint: Yor guess was too large, please try again.");
    }
}