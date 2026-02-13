let task = document.querySelector("#task");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");



btn.addEventListener("click", function (event) {
    let item =   document.createElement('li');
    item.textContent = task.value; 
    
    let delBtn =   document.createElement('button');

    delBtn.textContent = "Delete"; 
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    
    ul.appendChild(item);
    task.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;  
        listItem.remove();        
    }
});

