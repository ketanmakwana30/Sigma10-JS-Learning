// async function greet() {
//     throw "404"  // Throw Error
//     return "Hello!";
// }

// greet()
// .then( (res) => {
//     console.log(res);
//     console.log("Success");
// })
// .catch( (err) => {
//     console.log(err);
//     console.log("Error Eccour");   
// });


// Example of Async - Await

// function getNum() {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//             // reject();
//         }, 1000);
//     });
// }
 
// async function demo () {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();

//     return "done!"; 
// }


let h1 = document.querySelector("h1");

function colorChange(color, delay){
    return  new Promise ( (resolve, reject) => {
        setTimeout(()=> {
            let num = Math.floor(Math.random() * 5)+ 1;
            if  (num < 3) {
                reject("rejected error 404: page not Found");
            }


            h1.style.color = color;
            console.log(`color Changed`, color);
            
            resolve("Color Changed")
        },delay);
    });
};


// Async - await

async function getColor() {     
    try{                                // Rejection Handling
        await colorChange("red", 500)
        await colorChange("orange", 500)
        await colorChange("green", 500)
        colorChange("yellow", 500)
    } catch(err) {
        console.log(err)
    }

    let num = 3;
    console.log(num );  
    console.log(num + 20);  
}


// Promise Chaining
    
// const newLocal = colorChange("red", 500)
//     .then(() => {
//         console.log("Coler 1 Changed");
//         return colorChange("green", 500);
//     })
//     .then(() => {
//         console.log("Coler 2 Changed");
//         return colorChange("yellow", 500);
//     })
//     .then(() => {
//         console.log("Coler 3 Changed");
//         return colorChange("blue", 500);
//     })
//     .then(() => {
//         console.log("Coler 4 Changed");
//     })
//     .catch(() => {
//         console.log("Error");

//     });

