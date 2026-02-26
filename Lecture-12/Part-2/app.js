// Access Data From JSON  --> JSON.parse()  Method

const   URL = '{"fact":"The Maine Coone is the only native American long haired breed.","length":62}';

const jsObject = JSON.parse(URL);
console.log(jsObject);

// Access Data For JS  --> JSON.stringify()  Method

let student = {
    name: "ketan makwana",
    age: 19,
    hobby: "reading",
    nationality: "Indian",
    rollNo: 54,
}

let studentJson = JSON.stringify(student);
console.log(studentJson);