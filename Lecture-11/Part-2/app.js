
// Callback Nesting    -->   Callback Hell   ( Pyramid of Doom )

// let h1 = document.querySelector("h1");

// function colorChange(color, delay, nextColorChange){
//     setTimeout(()=> {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     },delay);
// }

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



//  Callback hell Example

function savetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4){
        success();
    } else {
        failure();
    }
};

savetoDB("Callback 1", () => {
    console.log("Success : Data 1 saved");
    savetoDB("Callback 2", () => {
        console.log("Success : Data 2 saved"); 
        savetoDB("Callback 3", () => {
            console.log("Success : Data 3 saved");
        }, () => {
            console.log("Failure : Data 3 not saved");
            savetoDB("Callback 4", () => {
                console.log("Success :  inside three");                
            }, () => {
                console.log("Failure : inside three");
            });
        });
    }, () => {
        console.log("Failure : Data 2 not saved");
    });
}, () => {
    console.log("Failure : Data 1 not saved");
});