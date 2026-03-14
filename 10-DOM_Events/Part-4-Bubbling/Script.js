let box = document.querySelector(".container");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");


box.addEventListener("click", function () {
    console.log("Box is Clicked.");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul is Clicked.");
});

for (li of lis){
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li is Clicked.");
    });
}
