// For Call Stack

function hello() {
    console.log("hello");
}
function demo() {
    hello();
}
demo();



// For Breakpoint 

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three();    



// JS is Single Threaded (One time one Work (Function etc...),One Execution at a Time) ==> Use Callback

let a = 10;         // Line By Line Execution Called ==> Synchronous Nature 
console.log(a);
let b = 20;
console.log(b);


setTimeout(() => {                  // Asynchronous Nature ==> Use of Callback          
    console.log("Apna College");
},2000)
console.log("Hello");