// Q-1. function return array elements larger than a number.

let array = [2, 5, 23, 1, 4, 65, 7];
let num = 10;

function returnElement(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            console.log(array[i]);
        }
    }
}
returnElement(array, num);


// Q-2. extract unique characters in str.

let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];

        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
// getUnique(str);
getUnique(str);


// Q-3. function that accepts a list of country names as input and returns the longest country name as output.

let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

longestName(country);


// Q-4. Vowels --> a, e, i, o, u

let strr = "apnacollege";
function countVowels(strr){ 
    let count=0; 
    for (let i=0; i < str.length; i++){
        if(strr.charAt(i) == "a" || strr.charAt(i) == "e" || strr.charAt(i) == "i" || strr.charAt(i) == "o" || strr.charAt(i) == "u"){
            count++;
        }
    }
    return count;
}
countVowels(strr);

// Q-5. Random nomber start and end value.

let start = 100;
let end = 300;

function generateRandom(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start ;
}
// generateRandom();
