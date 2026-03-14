
// // Favorite movie

// const favMovie = "Bahubali";

// let guess = prompt("Enter my favorite movie name ");

// while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("You Quit");
//         break;
//     }
//     guess = prompt("You are wrong, Try again");
// }

// if(guess == favMovie){
//         console.log("Congrass!!");       
// }





// Loops with Arrays

// let fruits = ["mango", "banana", "litchi", "apple", "orenge"];
// fruits.push("pineapple");

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
    
// }


// Backword
// let fruits = ["mango", "banana", "litchi", "apple", "orenge"];
// fruits.push("pineapple");

// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
    
// }



//Nested loop in array

// let heroes = [ ["patalu", "motu", "shingam", "zone"], ["balvir", "montu", "manav", "toba-toba"] ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i]);
    
//     for(let j=0; j< heroes[i].length; j++){
//         console.log(`j= ${j}, ${heroes[i][j]}`);
        
//     }
// }


// names and marks

// let students = [ ["ketan",80], ["rajvir",85], ["aniket",90] ];

// for(let i=0; i<students.length; i++){
//     for(let j=0; j<students[i].length; j++){
//         console.log(students[i][j]);
        
//     }
// }



//For of loop

// let fruits = ["mango", "banana", "litchi", "apple", "orenge"];

// for(frt of fruits){
//     console.log(frt);
    
// }

// for(char of "ApnaCollege"){
//     console.log(char);   
// }



// nested for of loop 


let heroes = [ ["patalu", "motu", "shingam", "zone"], ["balvir", "montu", "manav", "toba-toba"] ];

for(list of heroes){
    for(hero of list){
        console.log(hero);
        
    }
}
