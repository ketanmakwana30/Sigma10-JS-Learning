// if (true) {      //True
// if (false) {     //False
// if (0) {         //False
// if (-0) {        //False
// if (1) {         //True
// if (0n) {        //False        //BigInt
// if ("") {        //False        //Empty String
// if (null) {      //False
// if (" ") {       //True         //Empty String With Space 
if (undefined) {
    console.log("It has true value");   
}else{
    console.log("It has false value");
    
}