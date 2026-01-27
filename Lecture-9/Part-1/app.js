// document.all[8].innerText = "Peter Parker";

document.getElementById("mainImg");                 // getElementById

document.getElementsByClassName("boxLink");         // getElementsByClassName
 
let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i <= smallImages.length; i++){                // Change Image
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.dir(`Value of image no. ${i} is changed`);
// }

for(let i = 0; i <= smallImages.length; i++){                   // Print All image
    console.dir(smallImages[i]);
}


document.getElementsByTagName("p");                 // getElementsByTagName