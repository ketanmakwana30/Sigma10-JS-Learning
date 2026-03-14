// Q-1. delete element 'num' like 2

// let arr = [1,2,3,4,5,6,2,3];

// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);



// Q-2. Find count in numbers

// let number=287152;
// let count=0;
// let copy=number;

// while(copy > 0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log("Count =",count);




// Q-3. sum of digits

// let number = 287152;
// let sum = 0;

// let copy = number;

// while(copy > 0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10)
// }
// console.log(sum);


//Q-4. print factorial

// let n = 10;
// let factorial = 1;

// for(let i=1; i<=n; i++){
//     factorial *= i;
// }

// console.log(`Factorial of ${n} is ${factorial}`);


//Q-5. Find largest number in array with only positive number 

let arr = [1,3,5,6,8,34,7,95,242,642];
let largest = 0;

for(let i=0; i<=arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log("Largest number is:",largest);
