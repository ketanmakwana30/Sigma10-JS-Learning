// Rest 

function sum (...args) {                    //Arguments
    for (let i = 0; i < args.length; i++){
        console.log("you give us:", args[i]);
    }
}

function min ()  {
    console.log(arguments);
    
}

function min(mes, ...args){                 // In this use Rest and print minimum value        
    console.log(mes);   
    return args.reduce( (min, el) => {
        if (min > el ){
            return el;
        }else{
            return min; 
        }
    });
    
}



// Destructuring    --> store Array value in like variable 

let names = ["ketan", "DK", "Rv", "Aniket", "Arjun", "Bhim"];
// let winner = names[0];
// let runnerup = names[1];
// let runnerupsecond = names[3];

let [winner, runnerup, ...other] = names;           // Use Destructuring 



// Destructuring with Object

const student = {
    name: "jay",
    age: 14,
    class: 9,
    subject: ["Hindi", "English", "Math"],
    usermane: "jay32",
    password: "abc@123"
};

let { usermane: user, password: secret, city: place = "Mumbai"} = student;