const btn = document.querySelector("button");
const inp = document.querySelector("#non");


// const box = document.querySelector(".box");
// const para = document.querySelector("p");
// const h3 = document.querySelector("h3");


// box.addEventListener("mouseover", () => {        // Mouse Events
//     console.log("mouse inside box"); 
// });



// btn.addEventListener("click", () => {            // Arrow Function
//     console.log(this); 
// });

// btn.addEventListener("click", function () {      // Simpale Function
//     console.log(this.innerText); 
//     this.style.backgroundColor = "blue", this.style.color = "white";
// });

// function changeColor() {
//     this.style.backgroundColor = "blue";
// }

// para.addEventListener("click", changeColor);             // Mouse Events
// btn.addEventListener("click", changeColor);              // Mouse Events
// h3.addEventListener("click", changeColor);               // Mouse Events

btn.addEventListener("click", function (evt) {              // Mouse Events
    console.log(evt);
    console.log("Hello");
});


// inp.addEventListener("keydown", () => {
//     console.log("key Released");
// });


// inp.addEventListener("keydown", (event) => {
//     console.log("Key = ",event.key);
//     console.log("Code = ",event.code);
// });


inp.addEventListener("keydown", (event) => {
    console.log("Code = ",event.code);
    if (event.code == "ArrowUp"){
        console.log("Element Move Up");
    } else if (event.code == "ArrowDown"){
        console.log("Element Move Doun");
    }else if (event.code == "ArrowLeft"){
        console.log("Element Move Left");
    }else if (event.code == "ArrowRight"){
        console.log("Element Move Right");
    }
});