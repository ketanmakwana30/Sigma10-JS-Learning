
let sum = 80;                   //Global scope



function calcSum(a, b){
    let sum = a + b;            //Function scope       
    console.log(sum);
}
// console.log(sum);            // Not Accessible in outside

calcSum(4,6);       
console.log(sum);



{
    let a = 31;
    console.log(a);           //Block scope
}
// console.log(a);            //Block scope not accessible out of block




// Nested Function          //Lexical Scope 

function outerFunc(){

    let x = 12;
    let y = 10;
    function innerFunc(){       //Function scope
        let a = 20;
        console.log(x);
        console.log(y);
    }
    // let x = 12;                 //Hoisting
    // let y = 10;
    // console.log(a);          // NOT Possible inner variable (Possitive is NOT true)
    
    innerFunc();
}
// outerFunc();




// Practice Question set- 7

let greet = "hello";                //Global scope

function changeGreet(){
    let greet = "Namaste!";         //Function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);         //Lexical scope
    }
    innerGreet();       //namaste!
}

console.log(greet);     //hello
changeGreet();          //namaste!



// Function Expression 

const calSum = function(a,b){
    return a+b;
}
console.log(calSum(4,6));




// Higher order function

function multipleGreet(func, count){
    for(let i=1; i<=20; i++){
        func();
    }
}
let greet1 = function(){
    console.log("Hello!");
}
multipleGreet(greet1, 5)