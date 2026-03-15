const url = "https://dog.ceo/api/breeds/image/random";

const btn = document.querySelector(".btn");
const imgEl = document.querySelector("img");
const errmsg = document.querySelector("#message");


async function getImage() {
    try {
        let image = await axios.get(url);
        imgEl.src = image.data.message;
    } catch(err) {
        errmsg.innerHTML = "Image not Found";
    }
    
}

btn.addEventListener("click", getImage);