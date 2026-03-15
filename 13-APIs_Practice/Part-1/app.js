// const url = "https://catfact.ninja/fact";

// Async await

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch (error) {
//         console.log("Error --", error);
//     }
// }


// Axios --> Library to make HTPP request

const url = "https://catfact.ninja/fact";

const btn = document.querySelector("button");
const factEl = document.querySelector("#fact");

async function getFacts() {
    try {
        let res = await axios.get(url);         
        // let data = await res.json();   // Not Need
        factEl.innerHTML = res.data.fact;
    } catch (error) {
        console.log("Error --", error);
        factEl.innerHTML = "Fact not Found"
    }
}
    
btn.addEventListener("click", getFacts);
 