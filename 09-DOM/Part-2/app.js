const box = document.querySelector(".box");
const para = document.querySelector(".description");
const h2 = document.querySelector("#h2");

para.classList.add("newColor");             // Add Class
para.classList.remove("newColor");          // Remove Class
para.classList.contains("newColor");        // Check Class 
para.classList.toggle("newColor");          // Toggle Class (Add or Remove)

box.classList.add("yellowBg");

// Navigation (parent, children, previousElementSibling / nextElementSibling)

box.parentElement;                                  // body
box.children;                                       // h4 , ul
box.previousElementSibling;                         // p
box.nextElementSibling.classList.add("yellowBg");   // h2
box.childElementCount                               // 2



let btn = document.createElement("button");         // Create 
let btnEl = document.createElement("button");       // Create 

btn.innerHTML ="Hello";
btnEl.innerHTML ="Click me!";

box.appendChild(btn);                               // appendChild

box.append("World");                                // append   --> in element

box.prepend("Main Publishers");                     // prepend  --> first element

box.insertAdjacentElement('beforeend',btnEl);       // 1. beforebegin 2. afterbegin 3. beforeend 4. afterend

box.removeChild(btn);                               // removeChild
h2.remove();                                        // remove