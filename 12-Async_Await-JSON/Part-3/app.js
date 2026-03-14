const url = "https://catfact.ninja/fact";

// fetch(url)
// .then( (res) => {
//     return res.json();
// })
// .then( (data) => {
//     console.log(data);
//     return fetch(url);
// })
// .then( (res) => {
//     return res.json();
// })
// .then( (data2) => {
//     console.log(data2);
// })
// .catch( (err) => {
//     console.log("ERROR --", err);   
// })

async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    
}