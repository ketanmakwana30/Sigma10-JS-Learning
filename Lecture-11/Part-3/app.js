// Promises

function getData (data) {
    return new Promise ( (resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 ) + 1;
        if  ( internetSpeed > 4 ){
            resolve("Your Data is Saved.");
        } else {
            reject("Error : 400");
        }
    });  
};

// Promise Chaining

getData("Apna College")
    .then( () => {
        console.log("Data 1 success ");
        return getData("Shradha Khapra");
    })
    .then( () => {
        console.log("Data 2 success ");
        return getData("Ketan Makwana");
    })
    .then( () => {
        console.log("Data 3 success ");
    })
    .catch( () => {
        console.log(" promise was Rejected");
    });