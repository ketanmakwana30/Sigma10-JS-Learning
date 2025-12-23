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



// Practice Question set- 1

function printPoim(){
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
// printPoim();


// Practice Question set- 2

function diseNum (){
        console.log( Math.floor(Math.random() *6 )+ 1);
}
diseNum();