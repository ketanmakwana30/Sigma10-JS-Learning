
let h1 = document.querySelector("h1");

function colorChange(color, delay){
    return  new Promise ( (resolve, reject) => {
        setTimeout(()=> {
            h1.style.color = color;
            resolve("Color Changed")
        },delay);
    });
};

// Promise Chaining

colorChange("red", 500)
    .then( () => {
        console.log("Coler 1 Changed");
        return colorChange("green", 500)
    })
    .then( () => {
        console.log("Coler 2 Changed");
        return colorChange("yellow", 500)
    })
    .then( () => {
        console.log("Coler 3 Changed");
        return colorChange("blue", 500)
    })
    .then( () => {
        console.log("Coler 4 Changed");
    })
    .catch( () => {
        console.log("Error");

    })


// Callback Hell   


// colorChange("red", 500, () => {
    //     colorChange("orange", 500,() => {
        //         colorChange("green", 500, () => {   
            //             colorChange("yellow", 500, () => {
//                 colorChange("blue", 500, () => {
//                     colorChange("pink", 500, () => {
//                         colorChange("purple", 500)
//                     })
//                 })
//             })
//         })
//     })
// })

