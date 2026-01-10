//ARRAY METHODS



// forEach method

let arr = [1, 2, 3, 4 ,5];

// let print = function (el){           //Simple way
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach( (el) => {              //Direct function
//     console.log(el);
// })
// arr.forEach( function (el){         //Arrow function
//     console.log(el);
// })

let students = [
    {
    name:'ketan',
    marks:89
    },
    {
    name:'DK',
    marks:90
    },
    {
    name:'Rv',
    marks:98
    }
];

// students.forEach( (student) => {
//     console.log(student.name, student.marks);
    
// });




// map method

let gpa = students.map( (el) => {
    return el.marks / 10;
});


let square = arr.map( (el) => {             //map method
    return el * el;
});




// filter method

// let nums = [1, 2, 3, 4, 5, 8, 9, 10];

// let even = nums.filter( (el) => {
//     return el % 2 == 0 ;
// });
// console.log(even);



//every method

// nums = [2, 4, 6, 10];
// let checkEvery = nums.every( (el) => (el%2 == 0));
// console.log(checkEvery);                               //ture



// some method

// nums = [1, 3, 5, 6];

// let checkSome = nums.some( (el) => (el%2 == 0));
// console.log(checkSome);                               //ture



//reduce method

// let checkReduce = [1, 4, 5, 6, 7, 8, 14];
// let newReduce = checkReduce.reduce( function (res, el) {
//     return (res + el)
// });
// console.log(newReduce);



// maximum value using reduce

let maxArr = [1, 5, 3, 6, 7, 100, 100, 49, 30, 23, 63, 34, 32, 12];

// let max = 0;

// for(let i=0; i < maxArr.length; i++){
//     if(max < maxArr[i]){
//         max = maxArr[i];
//     }
// };
// console.log(max);


let findMax = maxArr.reduce( (max, el) => { 
        if(el > max){
                return el;
    }else{
            return max;
        }
    });
    console.log(findMax);




// Practuce Question set


// Q-1. In array are multipuls of 10 or not.

let num = [10, 20, 30, 40, 50];

let checkTen = num.every( (el) => (el % 10 == 0));

console.log(checkTen);


// Q-2. Create an function to find minimum number of array.

function getMin(num){
    let min = num.reduce( (min, el) => {
        if (min < el){
            return min;
        }else{
            return el;
        }
    });
    return min; 
};

console.log(getMin(num));
