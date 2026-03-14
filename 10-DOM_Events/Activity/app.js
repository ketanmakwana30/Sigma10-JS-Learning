let text = document.querySelector("#text");
let p = document.querySelector("p");

text.addEventListener("input", function () {
    console.log(this.value);
    p.innerText = this.value;
});