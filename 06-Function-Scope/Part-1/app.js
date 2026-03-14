// Functions

function hello(){
    console.log("Hello !");    
}

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

function isAdult(){
    let age = 42;
    if (age >= 18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
        
    }
}

// hello();
// print1to5();
// isAdult();



// Practice Question set- 1 (poim)

function printPoim(){
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
// printPoim();



// Practice Question set- 2 (dise)

function rollDise (){
    let random = Math.floor(Math.random() *6 )+ 1;
    console.log(random);
}
// rollDise();



// Function with arguments

function printInfo(name, age, gender){                               //parameter name, age, gender
    console.log(`${name}'s age is ${age} and he is ${gender}.`);
}
// printInfo("ketan",19, "male");                                      //argument ketan, 19, male  



// Practice Question Set- 3 (average of 3 number)

function calcAvg(a, b, c){
    let avg = (a + b + c)/3;
    console.log(avg);   
}
// calcAvg(15,20,40);



// Practice Question Set- 4 (multiplication table)

function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i); 
    }
}
// printTable(4);



// Simple sum function

function sum(a, b){
    console.log(a + b);
}
sum(54,23);


function sum(a, b){
    return a + b;
}
console.log(sum(34,53));



// Practice Question Set- 5 (Print number 1 to n)

function getSum(n){
    let sum = 0;
    for (let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}



// Practice Question Set- 6 (Concatination of all string in array)

let str = ["Hii ", "hello ", "How ", "age ", "you ", "?"];

function concat(str){
    let result;

    for ( let i=0; i>str.length; i++){
        result += str[i];   
    }
    return result;
}
console.log(concat(str));
