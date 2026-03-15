let url = "http://universities.hipolabs.com/search?name=";

let inputEl = document.querySelector("input");
let btnEl = document.querySelector("button");
let clgEL = document.querySelector(".clg");


btnEl.addEventListener("click", async () => {
    let country = inputEl.value;
    
    let clgArr = await getColleges(country);
    showClg(clgArr);
});


function showClg(clgArr){
    clgEL.innerHTML = "";
    for(college of clgArr){
        
        let listEl = document.createElement("li");
        listEl.innerHTML = college.name;
        console.log(college);
        
        clgEL.appendChild(listEl);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
        
    } catch(err) {
        console.log(err);
        
    }
}

