let btn = document.querySelector("button");
let jockEl = document.querySelector(".jock");

const url = "https://icanhazdadjoke.com/";

async function getJocks() {
    try{
        const config = { headers: { Accept: "application/json"}}
        let jock = await axios.get(url, config);
        jockEl.innerHTML = jock.data.joke;
    } catch(err) {
        console.log(err);        
    }
} 

btn.addEventListener("click", getJocks)