//Q-1. array average with arrow function

const arrayAverage = (arr) =>{
    let totle = 0;
    for(let num of arr){    
        totle += num;
    }
    return totle / arr.length;
};

    let arr = [1, 4, 6, 7, 9, 3];
console.log(arrayAverage(arr));


//Q-2. arrow function named is even or not ?

let num = 4;

const isEven = (num) => {
    return num % 2 == 0;
}

//Q-3. out put ?

const obj = {
    message: 'Hello, World!', 
    logMessage() {
        console.log(this.message);      //undifined
    }
};
setTimeout(obj.logMessage, 1000)


//Q-4. Out put ?

let length = 4; 
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
    },
};
object.method(callback,1,2);