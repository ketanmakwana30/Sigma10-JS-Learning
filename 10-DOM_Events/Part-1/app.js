const btnEl = document.querySelector("button");
const btns = document.querySelectorAll("button");

// btnEl.onclick = function () {
//     console.log("hello");
// };


function sayhello () {                      
    console.log("hello");
};

for(button of btns) {
    // button.onmouseover = sayhello;           // Events with all button
    // button.onmouseenter = sayhello;
    button.onclick = sayhello;
}


btnEl.addEventListener("dblclick", function () {        //Event listener
    console.log("Click 2 Time");        
    
});