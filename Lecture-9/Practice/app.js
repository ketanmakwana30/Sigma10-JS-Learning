const para = document.createElement("p");
const h3 = document.createElement("h3");
const box = document.createElement("div");
const h1 = document.createElement("h1");
const para2 = document.createElement("p");

const body = document.querySelector("body");

para.innerHTML = "Hey I'm red !";
body.append(para);
para.classList.add("red");

h3.innerHTML = "Hello I'm blue h3!";
body.append(h3);
h3.classList.add("blue");


h1.innerHTML = "I'm in a div!";
box.append(h1);

para2.innerHTML = "Me too!";
box.append(para2);

body.append(box);
box.classList.add("box");


