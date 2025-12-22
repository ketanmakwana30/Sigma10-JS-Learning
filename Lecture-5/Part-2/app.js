// Math Methods

Math.abs(-32.99);           // Absolute value --> Positive value            // 32
Math.pow(4,5);              // Power                                        // 1024      
Math.floor(5.5);            // Num <= round off value  (Fursh)              // 5        // IMP (Nearest, Smallest int value)
Math.floor(-5.1);                                                           // -6
Math.ceil(5.7);             // Ceiling  (roof)                              //6
Math.ceil(-5.1);                                                            // -5       // IMP (Distant, Largest int value)


console.log(Math.floor(-5.5));


//Generate 1 to 10 random number

let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;

// Math.floor( Math.random() * 10)+ 1;


console.log(num);
