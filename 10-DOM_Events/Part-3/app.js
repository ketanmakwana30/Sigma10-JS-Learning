let form = document.querySelector("form");
let user = document.querySelector("#user");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let user = this.elements[0];
    let pass = this.elements[1];


    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value); 

    // alert(`hello ${user.value}, Your Password set to ${pass.value}`);
});


user.addEventListener("change", function () {
    console.log("Event Changed");
    console.log(this.value);    
});

user.addEventListener("input", function () {
    console.log("Event Changed");
    console.log(this.value);    
});