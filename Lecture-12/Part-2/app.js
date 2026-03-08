// // Access Data From JSON  --> JSON.parse()  Method

let jsonData = '{"fact":"The Maine Coone is the only native American long haired breed.","length":62}'

console.log(jsonData.fact);  // Undifined

let parseData = JSON.parse(jsonData);

console.log(parseData.fact);   // Got Fact



// // Access Data For JS  --> JSON.stringify()  Method
    
const studentObj = {
    name: "Ketan",
    age: 19, 
    Address: "Khari",
    college: "SSCCM"
}

let studentJson = JSON.stringify(studentObj)

console.log(studentJson);
