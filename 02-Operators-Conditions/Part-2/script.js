//Creating Arrays

// let student1 = "Aman";
// let student2 = "Shradha";
// let student3 = "Raj";

// let students = ["Aman","Shradha","raj"];

// let marks = [23,45,67,87];
// let names = ["Aman","Shradha","raj"];
// let info = ["Rajubha",34,8.99];         //mix array
// let newArr = [];                        //Empty array

// names.length 



// Array methods

// let car = ["audi","maruti","xuv"];
// car.push("toyota");                     // 1.push       //add end toyota


// car = ["audi","maruti","xuv"];
// car.pop();                              //pop           //delete end to toyota

// car = ["audi","maruti","xuv"];
// car.unshift("toyota");                  //unshift       //add start toyota

// car = ["audi","maruti","xuv"];
// car.shift();                            //shift         //delete start to toyota
 
// car = ["audi","maruti","xuv"];
// car.indexOf("audi");                    //indexOf

// car = ["audi","maruti","xuv"];
// car.includes("xuv");                    //includes


// let primary = ["red","green","blue"];
// let secondary = ["white","black","yellow"];

// primary.concat(secondary);                  //concat
// primary.reverse();                          //reverse


// let colors = ['blue', 'green', 'red', 'gray', 'black'];

// colors.slice(2);                           //slice
// colors.slice(3,colors.length);
// colors.slice(1,3);
// colors.slice(-2);


// let colors = ['blue', 'green', 'red', 'gray', 'black','white'];

// colors.splice(5);                               //start     
// colors.splice(0,2);                             //start, delete
// colors.splice(0, 0, "yellow","pink");           //start, delete, add yellow & pink
// colors.splice(1, 0, "lightpink");               //start,NO delete, add after blue -lightpink    


// let colors = ['blue', 'green', 'red', 'gray', 'black','white'];         //sort
// console.log(colors.sort());

// let num = [20,23,54,34,40,100];                                         //sort number
// console.log(num.sort());


    //Array references

//  let arr = ['a','b'];
//  let arrCopy = arr;
//  arr.push('c');

    //Constant Array

// const num = [1,3,4,5];
// num.push(7);
// num.pop(4);


    //Nested Array

// const number = [  [2, 3], [4, 5], [6, 7] ] ;
 





//    1.  Practice Question set

// let months = ["january", "july","march","august"];

// months.shift();                         //shift   
// months.shift();                         
// months.unshift("june");                 //unshift  
// months.unshift("july"); 


//   2.  Practice Question set 

// let months = ["january", "july","march","august"];
// console.log(months.splice(0,2, "july","june"));

// let lang = ["c","c++","html","javascript","python","java","c#"];
// lang.push("sql");
// console.log(lang.reverse().indexOf("javascript"));



// 3. tic-tac-toe game

let game = [ ["X", null, "O"], [null, "X", null], ["O", null, "X"] ];