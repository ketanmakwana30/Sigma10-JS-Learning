// Promises

function getData (data) {
    return new Promise ( (resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 ) + 1;
        if  ( internetSpeed > 4 ){
            resolve("Your Data is Saved.");
        } else {
            reject("Error Occured.");
        }
    });  
};

// Promise Chaining

getData("Apna College")
    .then( (res) => {
        console.log("Data 1 success ");
        console.log("Result:",res);
        return getData("Shradha Khapra");
    })
    .then( (res) => {
        console.log("Data 2 success ");
        console.log("Result:",res);
        return getData("Ketan Makwana");
    })
    .then( (res) => {
        console.log("Data 3 success ");
        console.log("Result:",res);
    })
    .catch( (err) => {
        console.log(" promise was Rejected");
        console.log("Error:",err);
    });