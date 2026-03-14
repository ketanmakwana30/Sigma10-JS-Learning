// document.all[8].innerText = "Peter Parker";

document.getElementById("mainImg");                     // getElementById Method

document.getElementsByClassName("boxLink");             // getElementsByClassName Method
 
let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i <= smallImages.length; i++){                // Change Image
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.dir(`Value of image no. ${i} is changed`);
// }

for(let i = 0; i <= smallImages.length; i++){                   // Print All image
    console.dir(smallImages[i]);
}

document.getElementsByTagName("p");                     // getElementsByTagName Method

console.dir(document.querySelector("h1"));              // querySelector --> tag

console.dir(document.querySelector("#description"));    // querySelector --> id

console.dir(document.querySelector(".boxLink"));              // querySelector --> class

console.dir(document.querySelector("div a"));              // Nester element


console.dir(document.querySelectorAll("div a"));              // All Element


// let para = document.querySelector('p');
// para.innerText;
// para.textContent;
// para.innerHTML;



// Manipulation 

let heading = document.querySelector("h1");
// heading.innerHTML = "<u>Spider Man</u>";
heading.innerHTML = `<u>${heading.innerText}</u>`;



// Manipulating Attributes

let image = document.querySelector("img");
 
image.getAttribute('id');                   // Getter   ( Use getAttribute )
image.setAttribute('id', 'spiderman');      // Setter   ( Use SetAttribute )


let linkEl = document.querySelectorAll('.box a');
// linkEl.style.color = "yellow";

// for (a of linkEl){
//     a.style.color = "chocolate"; 
// }

// linkEl.forEach(a => {
//     a.style.color = "red"; 
// });  

for(let i = 0; i < linkEl.length; i++){
    linkEl[i].style.color = "red";
}