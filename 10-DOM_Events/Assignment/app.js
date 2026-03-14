let contEl = document.querySelector(".container");
let box = document.querySelector("#box");
let input = document.querySelector("#inp");
let heading = document.querySelector("h2"); 
let btn = document.createElement('button');

box.addEventListener("mouseout", function () {
    console.log("Your Pointer is Out of the Box.");
});

// input.addEventListener("keypress", function () {
//     console.log("Key Was Pressed");
// });

btn.setAttribute("id", "btn");
btn.textContent = "Submit";
contEl.appendChild(btn);

btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green";
});     

input.addEventListener("input", function () {
    let newVal =    this.value.replace(/[^a-zA-Z ]/g,"")
    this.value = newVal;
    heading.textContent = newVal;     
});