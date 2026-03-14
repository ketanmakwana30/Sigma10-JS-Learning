const inputEl = document.createElement("input");
const btn = document.createElement("button");
const h1 = document.createElement("h1");
const para = document.createElement("p");

const body = document.querySelector("body");
const button = document.querySelector("#btn");

inputEl.setAttribute("placeholder", "username")
body.append(inputEl);

btn.setAttribute("id", "btn");
btn.innerText = "Click me";
body.append(btn);

h1.innerText = "DOM Practice";
body.append(h1);

para.innerHTML = "Apna College <b>SIGMA</b> Practice";
body.append(para);